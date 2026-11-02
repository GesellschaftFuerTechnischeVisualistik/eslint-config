import jsConfig from '@gtvmbh/eslint-config';

export default [
  ...jsConfig,
  {
    rules: {
      // Projektspezifische Regeln
    }
  },
  {
    ignores: ['dist/', 'node_modules/']
  }
];
