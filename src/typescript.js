module.exports = {
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'plugin:@typescript-eslint/strict-type-checked',
    '@gtvmbh/eslint-config'
  ],
  rules: {
    '@typescript-eslint/switch-exhaustiveness-check': ['error', {
      allowDefaultCaseForExhaustiveSwitch: false,
      requireDefaultForNonUnion: true,
      considerDefaultExhaustiveForUnions: true
    }],
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/no-extraneous-class": ["error", { allowWithDecorator: true }],
    'no-redeclare': 'off', // Typescript doesn't need the linter to check this
  },
  overrides: []
};
