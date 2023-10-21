module.exports = {
  root: true,
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks',
    'prettier'
  ],
  rules: {
    "prettier/prettier": [
      "warn",
      {
        trailingComma: "none",
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        bracketSpacing: true,
        bracketSameLine: false,
        jsxBracketSameLine: false,
        printWidth: 100,
      }
    ],
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    'no-tabs': 'off',
    'react/jsx-filename-extension': [1, {
      extensions: ['.jsx', '.tsx'],
    }],
    'react/function-component-definition': 'off',
    'no-unused-vars': 'off',
    'camelcase': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'no-empty': 'warn',
    "import/order": [
      "warn",
      {
        "pathGroups": [
          {
            "pattern": "@/**",
            "group": "external",
            "position": "after"
          }
        ],
        "newlines-between": "always",
        "groups": [
          "builtin",
          "external",
          "internal",
          "unknown",
          "parent",
          "sibling",
          "index",
          "object",
          "type"
        ]
      }
    ],
    'no-empty-pattern': 'warn',
    'max-classes-per-file': 'off',
    'class-methods-use-this': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    'pace-infix-ops': 'off',
    'consistent-return': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-useless-return': 'off',
    'react/no-array-index-key': 'off',
    'no-undef': 'off',
    'object-shorthand': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-plusplus': 'off',
    'prefer-destructuring': 'warn',
    'react/destructuring-assignment': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'eqeqeq': 'warn',
    'react/no-unused-prop-types': 'warn',
    'import/extensions': 'off',
    'no-restricted-syntax': 'off',
    'no-continue': 'off',
    'no-useless-escape': 'off',
    'no-param-reassign': ["error", { "props": false }],
    '@typescript-eslint/no-empty-interface': 'warn',
  },
};