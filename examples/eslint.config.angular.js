import angularConfig from '@gtvmbh/eslint-config/angular';

export default [
  ...angularConfig,
  {
    rules: {
      // Projektspezifische Regeln
    }
  },
  {
    ignores: ['dist/', 'node_modules/']
  }
];
