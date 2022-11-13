module.exports = {
  extends: ["plugin:astro/jsx-a11y-recommended"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2022,
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {},
    },
  ],
};
