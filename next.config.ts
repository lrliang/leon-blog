import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 使用 Webpack 而非 Turbopack（Velite 需要 Webpack 插件）
  webpack: (config) => {
    config.plugins.push(new VeliteWebpackPlugin());
    return config;
  },
  // 空的 turbopack 配置来消除警告
  turbopack: {},
};

class VeliteWebpackPlugin {
  static started = false;
  apply(compiler: any) {
    compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
      if (VeliteWebpackPlugin.started) return;
      VeliteWebpackPlugin.started = true;
      const dev = compiler.options.mode === 'development';
      const { build } = await import('velite');
      await build({ watch: dev, clean: !dev });
    });
  }
}

export default nextConfig;
