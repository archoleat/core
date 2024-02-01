export default {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: ['airbnb-base', 'plugin:unicorn/recommended'],
  plugins: ['import', 'unicorn'],
  rules: {
    'import/exports-last': 'error',
    'import/extensions': 'off',
    'import/group-exports': 'warn',
    'import/no-commonjs': 'error',
    'import/no-namespace': 'error',
    'import/no-unassigned-import': 'error',
    'import/no-unresolved': 'off',
    'unicorn/no-unused-properties': 'error',
    'unicorn/string-content': 'error',
  },
};
