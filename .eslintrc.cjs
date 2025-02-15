module.exports = {
   root: true,
   env: {
      browser: true,
      es2021: true,
      node: true,
   },
   parser: "@typescript-eslint/parser",
   parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
   },
   extends: [
      "eslint:recommended",
      "plugin:vue/vue3-recommended",
      "plugin:@typescript-eslint/recommended",
      "@vue/eslint-config-prettier",
      "plugin:prettier/recommended"
   ],
   plugins: ["@typescript-eslint"],
   rules: {
      "vue/multi-word-component-names": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }]
   },
};
