'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 to-red-800 text-white">
          <div className="text-center p-8">
            <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong</h1>
            <p className="text-xl mb-4">{this.state.error?.message}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-white text-red-900 rounded-lg font-bold hover:bg-red-100 transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
