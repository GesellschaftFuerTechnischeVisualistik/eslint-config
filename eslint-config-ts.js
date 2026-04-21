import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import javascriptConfig from './index.js';

export default defineConfig([
  ...javascriptConfig,
  ...tseslint.configs.strictTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true
      }
    }
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/member-ordering': 'off',
      '@typescript-eslint/no-confusing-void-expression': ['error', {
        ignoreErrorShorthand: true
      }],
      '@typescript-eslint/no-extraneous-class': ['error', {
        allowWithDecorator: true
      }],
      '@typescript-eslint/restrict-template-expressions': ['error', {
        allowNumber: true
      }],
      '@typescript-eslint/switch-exhaustiveness-check': ['error', {
        allowDefaultCaseForExhaustiveSwitch: false,
        requireDefaultForNonUnion: true,
        considerDefaultExhaustiveForUnions: true
      }],
      '@typescript-eslint/unbound-method': ['error', {
        ignoreStatic: true
      }],
      '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',
      'no-redeclare': 'off' // Typescript doesn't need the linter to check this
    }
  }
]);
