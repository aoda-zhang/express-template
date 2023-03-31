module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: ['standard'],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-var': 'error',
    'no-undef': 0,
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    'no-unused-vars': 1
  }
}
