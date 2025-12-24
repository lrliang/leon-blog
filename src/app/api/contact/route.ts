import { NextRequest, NextResponse } from 'next/server';

// 邮箱验证正则
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, source } = body;

    // 验证必填字段
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '请填写所有必填字段' },
        { status: 400 }
      );
    }

    // 验证邮箱格式
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '请输入有效的邮箱地址' },
        { status: 400 }
      );
    }

    // TODO: 集成 Resend API 发送通知邮件
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@leon.blog',
    //   to: 'leon@example.com',
    //   subject: `新咨询请求 - ${name}`,
    //   html: `
    //     <h2>新咨询请求</h2>
    //     <p><strong>姓名:</strong> ${name}</p>
    //     <p><strong>邮箱:</strong> ${email}</p>
    //     <p><strong>来源:</strong> ${source || '直接访问'}</p>
    //     <p><strong>需求:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    // 模拟成功响应
    console.log(`New contact: ${name} (${email}) - Source: ${source || 'direct'}`);
    console.log(`Message: ${message}`);

    return NextResponse.json(
      { message: '提交成功！我会尽快回复您。' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact error:', error);
    return NextResponse.json(
      { error: '提交失败，请通过微信联系我' },
      { status: 500 }
    );
  }
}

