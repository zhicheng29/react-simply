// @see: https://eslint.cn
module.exports = {
  root: true,
  env: { browser: true, node: true, es6: true },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react-hooks/recommended"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "prettier"],
  rules: {
    // eslint (https://eslint.cn/docs/rules)
    "no-var": "error",
    "prefer-const": "error",
    "no-unused-vars": "off",
    "no-use-before-define": "error",
    "no-multiple-empty-lines": ["error", { max: 1 }],

    // typeScript (https://typescript-eslint.io/rules)
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-non-null-assertion": "off",

    // react-hooks (https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
    "react-hooks/exhaustive-deps": "off",
    "react-hooks/rules-of-hooks": "error",

    // react-refresh (https://github.com/ArnaudBarre/eslint-plugin-react-refresh)
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }]
  }
};
