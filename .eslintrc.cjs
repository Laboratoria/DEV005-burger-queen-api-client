module.exports = {
    env: { browser: true, es2020: true, 'jest/globals': true },
    files: ['*.test.js', '*.spec.js', '*.test.jsx'],
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
    ],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh', 'jest'],
    rules: {
      'linebreak-style': 0,
      'no-console': 'off',
      'no-var': 'error',
      'max-len': 'off',
      'no-plusplus': 'off',
      'react-refresh/only-export-components': 'warn',
    },
  }