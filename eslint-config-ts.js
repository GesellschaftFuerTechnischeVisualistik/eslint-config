import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import javascriptConfig from './index.js';

const inheritedJavascriptConfig = javascriptConfig.map((config) => {
  return {
    ...config,
    files: [...new Set([...config.files, '**/*.ts', '**/*.tsx'])]
  };
});

export default defineConfig([
  ...inheritedJavascriptConfig,
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
        ignoreArrowShorthand: true
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
