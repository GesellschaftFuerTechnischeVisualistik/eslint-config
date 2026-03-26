import { defineConfig } from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin';
import js from '@eslint/js';

export default defineConfig([
  {
    extends: [
      js.configs.recommended,
      stylistic.configs.recommended
    ],
    files: ['**/*.js', '**/*.jsx'],
    rules: {
      // Stylistic rules
      '@stylistic/brace-style': ['error', '1tbs'], // one true brace style
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/no-multiple-empty-lines': ['error', {
        max: 1,
        maxBOF: 0,
        maxEOF: 1
      }],
      '@stylistic/padding-line-between-statements': ['error', {
          blankLine: 'always',
          prev: '*',
          next: 'return'
        }
      ],

      // ESLint rules
      'function-paren-newline': 'error',
      'max-lines': 'off',
      'max-lines-per-function': 'off',
      'max-nested-callbacks': ['warn', { max: 3 }],
      'max-params': ['warn', { max: 7 }],
      'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
      'prefer-destructuring': 'off'
    }
  }
]);
