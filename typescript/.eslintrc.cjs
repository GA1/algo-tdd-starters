module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ['prettier', 'plugin:import/typescript', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  ignorePatterns: [
    '/dist/**/*',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    'prettier/prettier': ['error']
  },
};
