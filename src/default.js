import { defineConfig } from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
  {
    plugins: {
      '@stylistic': stylistic
    },
    extends: ['js/recommended'],
    rules: {}
  }
]);
