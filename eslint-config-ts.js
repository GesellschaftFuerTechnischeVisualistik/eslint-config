import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import javascriptConfig from './index';

export default defineConfig([
  ...javascriptConfig,
  ...tseslint.configs.strictTypeChecked,
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      '@typescript-eslint/switch-exhaustiveness-check': ['error', {
        allowDefaultCaseForExhaustiveSwitch: false,
        requireDefaultForNonUnion: true,
        considerDefaultExhaustiveForUnions: true
      }],
      '@typescript-eslint/member-ordering': 'off',
      '@typescript-eslint/no-extraneous-class': ['error', { allowWithDecorator: true }],
      'no-redeclare': 'off' // Typescript doesn't need the linter to check this
    }
  }
]);
