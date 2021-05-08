module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  parser: '@typescript-eslint/parser',
  env: { es2020: true, mocha: true, node: true },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 100,
        trailingComma: 'all',
        endOfLine: 'auto',
      },
    ],
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  overrides: [
    {
      files: ['src/**/*.ts', 'src/**/*.tsx'],
      env: { browser: true, jest: true, es2020: true, node: true },
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
      rules: {
        'prettier/prettier': [
          'error',
          { singleQuote: true, printWidth: 100, trailingComma: 'all', endOfLine: 'auto' },
        ],
        'no-console': 'warn',
        'no-alert': 'error',
        'react/display-name': 'warn',
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-explicit-any': 'off',
        'react/prop-types': 0,
        'react-hooks/exhaustive-deps': 'warn',
      },
      settings: {
        react: { pragma: 'React', version: 'detect' },
      },
    },
  ],
};
