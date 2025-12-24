module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // 新功能
        'fix',      // 修补bug
        'docs',     // 文档
        'style',    // 格式（不影响代码运行的变动）
        'refactor', // 重构
        'test',     // 增加测试
        'chore',    // 构建过程或辅助工具的变动
        'revert',   // 回滚
        'perf',     // 性能优化
        'urg',      // 紧急修复
        'build',    // 构建工具或依赖包的变动
        'ci',       // CI流程配置
      ],
    ],
    'subject-case': [0], // 允许任意大小写
  },
};

