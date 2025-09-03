module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  rules: {
    // 降低缩进错误严重性为警告，并设置缩进为2个空格
    'indent': ['warn', 2],
    // 允许在Vue模板中使用任意缩进
    'vue/html-indent': ['warn', 2, {
      'attribute': 1,
      'baseIndent': 1,
      'caseIndent': true,
      'closeBracket': 0,
      'alignAttributesVertical': false,
      'ignores': []
    }]
  }
};