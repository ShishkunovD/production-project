module.exports = {
    globals: {
      JSX: true,
      '__IS_DEV__': true,
    },
    parserOptions: {
      project: './tsconfig.json',
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    settings: {
      'import/resolver': {
        typescript: {},
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    extends: ['airbnb-typescript-prettier', 'eslint:recommended'],
    env: {
      jest: true,
    },
    rules: {
      'no-param-reassign': ['error', { props: false }],
      'import/prefer-default-export': 'off',
      'react/require-default-props': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'react/jsx-props-no-spreading': 'warn',
      'import/no-extraneous-dependencies': 'off',
      'import/no-named-as-default': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-underscore-dangle': 'off',
      'react/function-component-definition': [
        2,
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
          aspects: ['invalidHref', 'preferButton'],
        },
      ],
      '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '^_' }],
      'no-unused-vars': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          required: {
            some: ['nesting', 'id'],
          },
        },
      ],
      'jsx-a11y/label-has-for': [
        'error',
        {
          required: {
            some: ['nesting', 'id'],
          },
        },
      ],
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/interactive-supports-focus': 'off',
      'import/no-unresolved': [2, { caseSensitive: false }],
      'import/order': [
        'error',
        {
          pathGroups: [
            {
              pattern: 'react',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: 'src/**',
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['react', 'src/**'],
          groups: [
            ['builtin', 'external', 'internal'],
            ['parent', 'sibling'],
          ],
          'newlines-between': 'always-and-inside-groups',
        },
      ],
      'class-methods-use-this': ['error', { enforceForClassFields: false }],
    },
  
  };
  