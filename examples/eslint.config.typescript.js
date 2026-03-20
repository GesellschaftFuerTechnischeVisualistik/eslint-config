import tsConfig from '@gtvmbh/eslint-config/typescript';

export default [
  ...tsConfig,
  {
    rules: {
      // Projektspezifische Regeln
    }
  },
  {
    ignores: ['dist/', 'node_modules/']
  }
];
