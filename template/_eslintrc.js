module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'detox'],
  rules: {
    'react-native/no-inline-styles': 0,
    semi: 0,
    '@typescript-eslint/no-unused-vars': 1,
  },
  overrides: [
    {
      files: ['*.e2e.js', 'scripts/jest.setup.js'],
      env: {
        'detox/detox': true,
        jest: true,
        'jest/globals': true,
      },
    },
  ],
}
