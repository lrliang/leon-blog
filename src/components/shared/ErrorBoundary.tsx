'use client';

import { Component, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-6 text-center">
            <p className="mb-4 text-lg font-medium">内容加载失败</p>
            <p className="mb-4 text-sm text-muted-foreground">
              抱歉，文章内容无法正常显示。请刷新页面重试。
            </p>
            <Button
              variant="outline"
              onClick={() => this.setState({ hasError: false })}
            >
              重试
            </Button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

