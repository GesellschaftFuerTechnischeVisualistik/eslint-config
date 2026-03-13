# Using the GTV ESLint configurations

1. Run `npm i @gtvmbh/eslint-config --save-dev` to install the GTV ESLint configuration. Take note of the messages about missing peer dependencies.
2. Add a file named `eslint.config.js` in the project root. Pick the configuration that fits your project type:
   * JavaScript:
     ```js
     import jsConfig from '@gtvmbh/eslint-config';

     export default jsConfig;
     ```
   * TypeScript:
     ```js
     import tsConfig from '@gtvmbh/eslint-config/eslint-config-ts';

     export default tsConfig;
     ```
   * Angular:
     ```js
     import angularConfig from '@gtvmbh/eslint-config/eslint-config-angular';

     export default angularConfig;
     ```
   * ViDaLa (layer on top of TypeScript):
     ```js
     import tsConfig from '@gtvmbh/eslint-config/eslint-config-ts';
     import vidalaConfig from '@gtvmbh/eslint-config/eslint-config-vidala';

     export default [
       ...tsConfig,
       ...vidalaConfig
     ];
     ```
3. Run ESLint from the project root to see if everything works as intended:
   * `./node_modules/.bin/eslint .`
4. Configure your IDE to use ESLint to check automatically. In VS Code it should be enough to install the ESLint extension and everything should be picked up automatically.
5. Brew some tea to cope with all your new linter errors.
