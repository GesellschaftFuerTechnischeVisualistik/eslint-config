# Using the GTV ESLint configurations

1. Run `npm i @gtvmbh/eslint-config --save-dev` to install the GTV ESLint configuration. Take note of the messages about missing peer dependencies.
2. Add a file named `.eslintrc.js` in the project root, setting up ESLint the use of the GTV ESLint configurations. See the `examples` folder for templates.
3. Run ESLint from the project root to see if everything works as intended: 
   * `./node_modules/.bin/eslint -c .eslintrc.js .` for javascript projects.
   * `./node_modules/.bin/eslint -c .eslintrc.js . --ext .ts` for typescript projects.
4. Configure your IDE to use ESLint to check automatically. In VS Code it should be enough to install the ESLint extension and everything should be picked up automatically.
5. Brew some tea to cope with all your new linter errors.
