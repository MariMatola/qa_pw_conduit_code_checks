import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import playwright from 'eslint-plugin-playwright';

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    ...js.configs.recommended, 
    languageOptions: { 
      globals: {
        console: "readonly",
        process: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        module: "readonly",
        exports: "readonly",
        require: "readonly",
        setTimeout: "readonly",
        setInterval: "readonly",
        clearTimeout: "readonly",
        clearInterval: "readonly"
      }
    },
  },
  { 
    ...js.configs.recommended,
    ...playwright.configs['flat/recommended'],
    rules: {
      'no-unused-vars': 'error',
      'max-len': ['error', { code: 80, comments: 80 }],
      'playwright/expect-expect': 'off',   
    },
    ignores: [
      '**/node_modules/*',
      'playwright.config.js',
      '**/playwright-report/**',
    ],
  },
]);