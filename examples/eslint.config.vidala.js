import tsConfig from '@gtvmbh/eslint-config/typescript';
import vidalaConfig from '@gtvmbh/eslint-config/vidala';

export default [
  ...tsConfig,
  ...vidalaConfig,
  {
    rules: {
      // Projektspezifische Regeln
    }
  },
  {
    ignores: ['dist/', 'node_modules/']
  }
];
