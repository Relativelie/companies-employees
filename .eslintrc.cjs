module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:react/recommended",
    "prettier",
    "plugin:jsx-a11y/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', "react", "react-hooks", "@typescript-eslint", "prettier", "jsx-a11y"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "camelcase": "error",
    "quotes": ["error", "single"],
    "react/react-in-jsx-scope": "off",
    "react-refresh/only-export-components": "off",
    'react/prop-types': 'off',
  },
}
