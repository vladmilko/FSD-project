module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks',
    'vlad-milko-plugin',
  ],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    indent: [2],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'object-curly-newline': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-param-reassign': 'off',
    'no-undef': 'off',
    'vlad-milko-plugin/fsd-valid-path-checker': ['error', { alias: '@' }],
    'vlad-milko-plugin/public-api-imports': [
      'error',
      {
        alias: '@',
        testFilesPatterns: [
          '**/*.test.*',
          '**/*.stories.*',
          '**/StoreDecorator.tsx',
        ],
      },
    ],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
      },
    ],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: [
          'data-testid',
          'to',
          'reducerName',
          'target',
          'justify',
          'align',
          'direction',
          'gap',
          'role',
          'as',
          'flexWrap',
          'borderRadius',
        ],
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'react/jsx-wrap-multilines': [
      'warn',
      {
        declaration: 'parens',
        assignment: 'parens',
        return: 'parens',
        arrow: 'parens',
        condition: 'ignore',
        logical: 'ignore',
        prop: 'ignore',
      },
    ],
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
        'react/jsx-props-no-spreading': 'off',
      },
    },
    {
      files: ['**/scripts/createSlice/**/*.js'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
