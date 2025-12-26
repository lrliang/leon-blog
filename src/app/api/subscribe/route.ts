import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// 邮箱验证正则
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 初始化 Resend 客户端
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // 验证邮箱格式
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: '请输入有效的邮箱地址' },
        { status: 400 }
      );
    }

    // 检查 Segment ID 是否配置
    const segmentId = process.env.RESEND_SEGMENT_ID;
    if (!segmentId) {
      console.error('RESEND_SEGMENT_ID not configured');
      return NextResponse.json(
        { error: '订阅服务配置错误，请联系管理员' },
        { status: 500 }
      );
    }

    // 1. 创建联系人（全局）
    const { data: contact, error: createError } = await resend.contacts.create({
      email,
    });

    if (createError) {
      console.error('Resend create contact error:', createError);
      // 如果是重复订阅，尝试直接添加到 Segment
      if (createError.message?.includes('already exists')) {
        // 联系人已存在，尝试添加到 Segment
        const { error: segmentError } = await resend.contacts.segments.add({
          email,
          segmentId,
        });

        if (segmentError) {
          // 如果已经在 Segment 中，返回友好提示
          if (segmentError.message?.includes('already')) {
            return NextResponse.json(
              { message: '您已订阅过了，无需重复订阅。' },
              { status: 200 }
            );
          }
          console.error('Resend add to segment error:', segmentError);
          return NextResponse.json(
            { error: '订阅失败，请稍后重试' },
            { status: 500 }
          );
        }

        return NextResponse.json(
          { message: '订阅成功！感谢您的关注。' },
          { status: 200 }
        );
      }

      return NextResponse.json(
        { error: '订阅失败，请稍后重试' },
        { status: 500 }
      );
    }

    // 2. 将联系人添加到 Segment
    if (contact?.id) {
      const { error: segmentError } = await resend.contacts.segments.add({
        contactId: contact.id,
        segmentId,
      });

      if (segmentError) {
        console.error('Resend add to segment error:', segmentError);
        // 即使添加到 Segment 失败，联系人已创建，返回成功
      }
    }

    console.log(`New subscriber added: ${email}`);

    return NextResponse.json(
      { message: '订阅成功！感谢您的关注。' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { error: '订阅失败，请稍后重试' },
      { status: 500 }
    );
  }
}

