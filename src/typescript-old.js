module.exports = {
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    '@gtvmbh/eslint-config'
  ],
  rules: {

    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",

    // Require that member overloads be consecutive
    '@typescript-eslint/adjacent-overload-signatures': 'error',

    // Requires using either T[] or Array<T> for arrays
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],

    // Disallows awaiting a value that is not a Thenable
    '@typescript-eslint/await-thenable': 'error',

    // Bans // @ts-<directive> comments from being used
    '@typescript-eslint/ban-ts-comment': 'off',

    // Bans specific types from being used
    '@typescript-eslint/ban-types': 'off',

    // Ensures that literals on classes are exposed in a consistent style
    '@typescript-eslint/class-literal-property-style': ['error', 'fields'],

    // Enforces consistent usage of type assertions
    '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' }],

    // Consistent with type definition either interface or type
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    // Require explicit return types on functions and class methods
    '@typescript-eslint/explicit-function-return-type': 'error',

    // Require explicit accessibility modifiers on class properties and methods
    // is defined in overrides to allow mixed code base
    '@typescript-eslint/explicit-member-accessibility': 'off',

    // Require explicit return and argument types on exported functions' and classes' public class methods
    '@typescript-eslint/explicit-module-boundary-types': 'error',

    // Require a specific member delimiter style for interfaces and type literals
    '@typescript-eslint/member-delimiter-style': 'error',

    // Require a consistent member declaration order
    '@typescript-eslint/member-ordering': 'warn',

    // Enforces using a particular method signature syntax.
    '@typescript-eslint/method-signature-style': 'warn', //anscheinend ist 'property' besser, weesschne,

    // Enforces naming conventions for everything across a codebase

    '@typescript-eslint/naming-convention': ['error', {
      selector: 'default',
      format: ['camelCase', 'UPPER_CASE'],
      leadingUnderscore: 'forbid',
    },

    {
      selector: 'variable',
      format: ['camelCase', 'UPPER_CASE'],
      leadingUnderscore: 'forbid',
    },

    {
      selector: 'typeLike',
      format: ['PascalCase'],
    }],

    // Requires that .toString() is only called on objects which provide useful information when stringified
    '@typescript-eslint/no-base-to-string': 'warn',

    // Disallow the delete operator with computed key expressions
    '@typescript-eslint/no-dynamic-delete': 'error',

    // Disallow the declaration of empty interfaces
    '@typescript-eslint/no-empty-interface': 'warn',

    // Disallow usage of the any type
    '@typescript-eslint/no-explicit-any': ['error', { fixToUnknown: true, ignoreRestArgs: false }],

    // Disallow extra non-null assertion
    '@typescript-eslint/no-extra-non-null-assertion': 'error',

    // Forbids the use of classes as namespaces
    '@typescript-eslint/no-extraneous-class': 'error',

    // Requires Promise-like values to be handled appropriately
    '@typescript-eslint/no-floating-promises': 'warn',

    // Disallow iterating over an array with a for-in loop
    '@typescript-eslint/no-for-in-array': 'warn',

    // Disallow the use of eval()-like methods
    '@typescript-eslint/no-implied-eval': 'error',

    // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
    '@typescript-eslint/no-inferrable-types': 'error',

    // Disallows usage of void type outside of generic or return types
    '@typescript-eslint/no-invalid-void-type': 'error',

    // Enforce valid definition of new and constructor
    '@typescript-eslint/no-misused-new': 'error',

    // Avoid using promises in places not designed to handle them
    '@typescript-eslint/no-misused-promises': 'error',

    // Disallow the use of custom TypeScript modules and namespaces
    '@typescript-eslint/no-namespace': 'error',

    // Disallows using a non-null assertion after an optional chain expression
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

    // Disallows non-null assertions using the ! postfix operator
    '@typescript-eslint/no-non-null-assertion': 'error',

    // Disallow the use of parameter properties in class constructors
    '@typescript-eslint/no-parameter-properties': 'off',

    // Disallows invocation of require()
    '@typescript-eslint/no-require-imports': 'error',

    // Disallow aliasing this
    '@typescript-eslint/no-this-alias': 'warn',// wie beißt sich das mit that = this in eslint?,

    // Disallow throwing literals as exceptions
    '@typescript-eslint/no-throw-literal': 'error',

    // Disallow the use of type aliases
    // NOTE (astahl): only prevent simple use of literal objects instead of interfaces, e.g type MyType = { a: string }.
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/consistent-type-definitions': ["error", "interface"],


    // Flags unnecessary equality comparisons against boolean literals
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

    // Prevents conditionals where the type is always truthy or always falsy
    '@typescript-eslint/no-unnecessary-condition': 'off',

    // Warns when a namespace qualifier is unnecessary
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',

    // Enforces that type arguments will not be used if not required
    '@typescript-eslint/no-unnecessary-type-arguments': 'warn',

    // Warns if a type assertion does not change the type of an expression
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',

    // Disallows assigning any to variables and properties
    '@typescript-eslint/no-unsafe-assignment': 'warn',

    // Disallows calling an any type value
    '@typescript-eslint/no-unsafe-call': 'warn',

    // Disallows member access on any typed variables
    '@typescript-eslint/no-unsafe-member-access': 'warn',

    // Disallows returning any from a function
    '@typescript-eslint/no-unsafe-return': 'warn',

    // Disallows the use of require statements except in import statements
    '@typescript-eslint/no-var-requires': 'error',

    // Prefer usage of as const over literal type
    '@typescript-eslint/prefer-as-const': 'warn',

    // Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
    '@typescript-eslint/prefer-for-of': 'warn',

    // Use function types instead of interfaces with call signatures
    '@typescript-eslint/prefer-function-type': 'warn',

    // Enforce includes method over indexOf method
    '@typescript-eslint/prefer-includes': 'warn',

    // Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules
    '@typescript-eslint/prefer-namespace-keyword': 'error',

    // Enforce the usage of the nullish coalescing operator instead of logical chaining
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',

    // Prefer using concise optional chain expressions instead of chained logical ands
    '@typescript-eslint/prefer-optional-chain': 'warn',

    // Requires that private members are marked as readonly if they're never modified outside of the constructor
    '@typescript-eslint/prefer-readonly': 'warn',

    // Requires that function parameters are typed as readonly to prevent accidental mutation of inputs
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',

    // Prefer using type parameter when calling Array#reduce instead of casting
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',

    // Enforce that RegExp#exec is used instead of String#match if no global flag is provided
    '@typescript-eslint/prefer-regexp-exec': 'warn',

    // Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',

    // Recommends using // @ts-expect-error over // @ts-ignore
    '@typescript-eslint/prefer-ts-expect-error': 'off', // cool aber TS >= 3.9,

    // Requires any function or method that returns a Promise to be marked async
    '@typescript-eslint/promise-function-async': ['error', { checkArrowFunctions: false, checkFunctionExpressions: false }],

    // Requires Array#sort calls to always provide a compareFunction
    '@typescript-eslint/require-array-sort-compare': ['warn', { 'ignoreStringArrays': true }],

    // When adding two variables, operands must both be of type number or of type string
    '@typescript-eslint/restrict-plus-operands': 'error',

    // Enforce template literal expressions to be of string type
    '@typescript-eslint/restrict-template-expressions': 'off', // (oder warn mit allen options an),

    // Restricts the types allowed in boolean expressions
    '@typescript-eslint/strict-boolean-expressions': ['warn', {
      allowString: true,
      allowNumber: true,
      allowNullableObject: true,
      allowNullableBoolean: false,
      allowNullableString: false,
      allowNullableNumber: false,
      allowNullableEnum: false,
      allowAny: false,
      allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
    }],

    // Exhaustiveness checking in switch with union type
    '@typescript-eslint/switch-exhaustiveness-check': 'error',

    // Sets preference level for triple slash directives versus ES6-style import declarations
    '@typescript-eslint/triple-slash-reference': ['error', { 'path': 'never', 'types': 'never', 'lib': 'never' }],

    // Require consistent spacing around type annotations
    '@typescript-eslint/type-annotation-spacing': 'error',

    // Requires type annotations to exist
    '@typescript-eslint/typedef': 'off', // compiler noImplicitAny

    // Enforces unbound methods are called with their expected scope
    '@typescript-eslint/unbound-method': ['warn', { 'ignoreStatic': true }],

    // Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
    '@typescript-eslint/unified-signatures': 'warn',


    /************************************************
     * EXTENSION RULES
     * 
     * https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#extension-rules
     * In some cases, ESLint provides a rule itself, but it doesn't support TypeScript syntax;
     * either it crashes, or it ignores the syntax, or it falsely reports against it. In these 
     * cases, we create what we call an extension rule; a rule within our plugin that has the 
     * same functionality, but also supports TypeScript.
     */

    // Enforce consistent brace style for blocks
    'brace-style': 'off',
    '@typescript-eslint/brace-style': 'error',

    // Enforces consistent spacing before and after commas
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': ['error', { 'before': false, 'after': true }],

    // Enforce default parameters to be last
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',

    // enforce dot notation whenever possible
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 'off',

    // Require or disallow spacing between function identifiers and their invocations
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': 'error',

    // Enforce consistent indentation
    'indent': 'off',
    '@typescript-eslint/indent': ["error", 2, { "SwitchCase": 1 }],

    // require or disallow initialization in variable declarations
    'init-declarations': 'off',
    '@typescript-eslint/init-declarations': 'off',

    // Enforce consistent spacing before and after keywords
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': 'error',

    // Require or disallow an empty line between class members
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': ['error', 'always', { 'exceptAfterSingleLine': true }],

    // Disallow generic Array constructors
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',

    // Disallow duplicate class members
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',

    // Disallow empty functions
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',

    // Disallow unnecessary parentheses
    "no-extra-parens": "off",
    "@typescript-eslint/no-extra-parens": ["warn", "all", { "conditionalAssign": false, "returnAssign": false, "nestedBinaryExpressions": false }],

    // Disallow unnecessary semicolons
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'warn',

    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'error',

    // Disallow magic numbers
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',

    // Disallow unused expressions
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],

    // Disallow unused variables
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',

    // Disallow the use of variables before they are defined
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'warn',

    // Disallow unnecessary constructors
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'warn',

    // Enforce the consistent use of either backticks, double, or single quotes
    'quotes': 'off',
    '@typescript-eslint/quotes': ['error', 'single', { 'allowTemplateLiterals': true }],

    // Disallow async functions which have no await expression
    'require-await': 'off',
    '@typescript-eslint/require-await': 'error',

    // Enforces consistent returning of awaited values
    'no-return-await': 'off',
    '@typescript-eslint/return-await': 'warn',

    // Require or disallow semicolons instead of ASI
    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'always'],

    // Enforces consistent spacing before function parenthesis
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always' }],

  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        // Require explicit accessibility modifiers on class properties and methods
        '@typescript-eslint/explicit-member-accessibility': 'error'
      }
    }
  ]
};
