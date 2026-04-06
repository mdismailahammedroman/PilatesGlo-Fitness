// eslint.config.mjs
import { defineConfig } from "eslint/config";
import eslintRecommended from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default defineConfig({
  // ESLint recommended rules
  ...eslintRecommended.configs.recommended,

  // TypeScript parser & options
  languageOptions: {
    parser: tsParser, // 👈 Must be the module, not a string
    parserOptions: {
      project: "./tsconfig.json", // required for type-aware rules
      tsconfigRootDir: process.cwd(),
      ecmaVersion: 2020,
      sourceType: "module",
    },
  },

  // Plugins
  plugins: {
    "@typescript-eslint": tsPlugin,
  },

  // Example rules
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
  },
});
