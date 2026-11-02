# Using the GTV ESLint configurations

1. Run `npm i @gtvmbh/eslint-config --save-dev` to install the GTV ESLint configuration. Take note of the messages about missing peer dependencies.
2. Add a file named `eslint.config.mjs` in the project root (or set `"type": "module"` in your `package.json` if you want to keep `eslint.config.js`). Pick the configuration that fits your project type:
   * JavaScript:
     ```js
     import jsConfig from '@gtvmbh/eslint-config';

     export default jsConfig;
     ```
   * TypeScript:
     ```js
     import tsConfig from '@gtvmbh/eslint-config/typescript';

     export default tsConfig;
     ```
   * Angular:
     ```js
     import angularConfig from '@gtvmbh/eslint-config/angular';

     export default angularConfig;
     ```
   * ViDaLa (layer on top of TypeScript):
     ```js
     import tsConfig from '@gtvmbh/eslint-config/typescript';
     import vidalaConfig from '@gtvmbh/eslint-config/vidala';

     export default [
       ...tsConfig,
       ...vidalaConfig
     ];
     ```
3. Run ESLint from the project root to see if everything works as intended:
   * `./node_modules/.bin/eslint .`
4. Configure your IDE to use ESLint to check automatically. In VS Code it should be enough to install the ESLint extension and everything should be picked up automatically.
5. Brew some tea to cope with all your new linter errors.

## Inspecting the configuration

To review and inspect the typescript configuration, execute `npm run inspect`. Any other config file can be inspected with `npx @eslint/config-inspector@latest --config <FILE>`. The inspector runs von `localhost:7777` and provides an overview of all configuration objects, as well as all applied rules and their configuration.
