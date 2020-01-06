module.exports = {
  root: true,

  parser: "babel-eslint",

  plugins: ["import"],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },

  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module"
  },

  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"]
  },

  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      rules: {
        // #region tsc responsability
        "no-dupe-class-members": "off",
        "no-undef": "off",
        // #endregion tsc responsability

        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
        "@typescript-eslint/consistent-type-assertions": "warn",

        "no-array-constructor": "off",
        "@typescript-eslint/no-array-constructor": "warn",

        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": [
          "error",
          {
            functions: false,
            classes: false,
            variables: false,
            typedefs: false
          }
        ],

        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": [
          "warn",
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true
          }
        ],

        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            args: "all",
            argsIgnorePattern: "^_",
            ignoreRestSiblings: true
          }
        ],

        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "warn"
      }
    }
  ],

  rules: {
    // http://eslint.org/docs/rules/
    "array-callback-return": "error",
    "constructor-super": "error",
    "for-direction": "error",
    "getter-return": "error",
    "use-isnan": "error",
    "valid-typeof": ["error", { requireStringLiterals: true }],
    "no-caller": "error",
    "no-const-assign": "error",
    "no-delete-var": "error",
    "no-dupe-args": "error",
    "no-invalid-regexp": "error",
    "no-negated-in-lhs": "error",
    "no-new-symbol": "error",
    "no-obj-calls": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-shadow-restricted-names": "error",
    "no-this-before-super": "error",
    "no-undef": "error",
    "no-use-before-define": [
      "error",
      {
        functions: false,
        classes: false,
        variables: false
      }
    ],
    "no-with": "error",

    eqeqeq: ["warn", "smart"],
    "no-array-constructor": "warn",
    "no-cond-assign": ["warn", "except-parens"],
    "no-constant-condition": ["warn", { checkLoops: false }],
    "no-const-assign": "warn",
    "no-dupe-class-members": "warn",
    "no-dupe-keys": "warn",
    "no-duplicate-case": "warn",
    "no-empty": ["warn", { allowEmptyCatch: true }],
    "no-empty-character-class": "warn",
    "no-empty-pattern": "warn",
    "no-ex-assign": "warn",
    "no-extra-bind": "warn",
    "no-fallthrough": "warn",
    "no-func-assign": "warn",
    "no-labels": "warn",
    "no-new-func": "warn",
    "no-new-object": "warn",
    "no-new-wrappers": "warn",
    "no-restricted-properties": [
      "warn",
      {
        object: "require",
        property: "ensure",
        message:
          "Please use import() instead. More info: https://webpack.js.org/api/module-methods/#requireensure"
      },
      {
        object: "System",
        property: "import",
        message:
          "Please use import() instead. More info: https://webpack.js.org/guides/code-splitting/"
      }
    ],
    "no-script-url": "warn",
    "no-self-assign": "warn",
    "no-self-compare": "warn",
    "no-sequences": "warn",
    "no-template-curly-in-string": "warn",
    "no-throw-literal": "warn",
    "no-unreachable": "warn",
    "no-unused-vars": [
      "warn",
      {
        args: "after-used",
        ignoreRestSiblings: true
      }
    ],
    "no-useless-constructor": "warn",
    "no-unused-expressions": [
      "warn",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],
    strict: ["warn", "never"],

    // https://github.com/benmosher/eslint-plugin-import#rules
    "import/no-unresolved": [
      "error",
      {
        // Also error for unresolved CommonJS require() calls.
        commonjs: true,
        caseSensitive: true
      }
    ],
    "import/default": "error",
    "import/export": "error",
    "import/first": "error",
    "import/named": "error",
    "import/namespace": "error",
    "import/no-amd": "error",
    "import/no-extraneous-dependencies": "warn",
    "import/no-named-as-default": "warn",
    "import/no-webpack-loader-syntax": "error"
  }
};
