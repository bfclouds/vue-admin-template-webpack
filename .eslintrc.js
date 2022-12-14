module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    // 'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
    quotes: ['error', 'single'],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['error'],
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    'no-undef' : 'off'
  },
}
