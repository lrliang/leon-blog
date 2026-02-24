'use client';

import { forwardRef } from 'react';

interface ShareCardProps {
  title: string;
  description: string;
  date: string;
  tags: string[];
  url: string;
}

export const ShareCard = forwardRef<HTMLDivElement, ShareCardProps>(
  function ShareCard({ title, description, date, tags, url }, ref) {
    const formattedDate = new Date(date).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    return (
      <div
        ref={ref}
        style={{
          width: 440,
          minHeight: 560,
          padding: 40,
          display: 'flex',
          flexDirection: 'column',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans SC", sans-serif',
          background: 'linear-gradient(145deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
          color: '#fff',
          borderRadius: 16,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: -60,
            right: -60,
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'rgba(99, 102, 241, 0.08)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -40,
            left: -40,
            width: 160,
            height: 160,
            borderRadius: '50%',
            background: 'rgba(59, 130, 246, 0.06)',
          }}
        />

        {/* Header: logo + brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 32,
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              backgroundColor: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 18,
              fontWeight: 700,
              color: '#0a0a0a',
              flexShrink: 0,
            }}
          >
            L
          </div>
          <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)' }}>
            Leon&apos;s Blog
          </span>
        </div>

        {/* Title */}
        <h2
          style={{
            fontSize: title.length > 20 ? 26 : 30,
            fontWeight: 700,
            lineHeight: 1.35,
            margin: '0 0 16px 0',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {title}
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.7)',
            margin: '0 0 24px 0',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {description}
        </p>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Tags */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
            marginBottom: 24,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: '4px 12px',
                borderRadius: 20,
                fontSize: 12,
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.8)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer: date + url */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 20,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
            {formattedDate}
          </span>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
            {url.replace(/^https?:\/\//, '')}
          </span>
        </div>
      </div>
    );
  }
);
