// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'block-spacing': 'off',
    'brace-style': 'off',
    'comma-spacing': 'off',
    'eol-last': 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    'keyword-spacing': 'off',
    'indent': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-multiple-empty-lines': 'off',
    'no-useless-escape': 'off',
    'no-useless-return': 'off',
    'padded-blocks': 'off',
    'prefer-promise-reject-errors': 'off',
    'semi': 'off',
    'semi-spacing': 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren': 'off',
    'space-infix-ops': 'off'
  }
}
