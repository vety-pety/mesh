module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: [
    'ember'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    'no-unused-vars': [
      'error',
      { args: 'all', argsIgnorePattern: '^_', varsIgnorePattern: '[iI]gnored' },
    ],
    'no-console': 0,
    'require-yield': 0,
    //REMOVE THESE RULES AFTER FIXING THEM
    'ember/use-brace-expansion': 0,
    'ember/avoid-leaking-state-in-ember-objects': 0,
    'ember/routes-segments-snake-case': 0,
    'ember/closure-actions': 0,
    quotes: ['error', 'single', { avoidEscape: true }],
    'comma-dangle': ['error', 'always-multiline'],
    curly: ['error', 'all'],
    'max-len': ['error', { code: 100, ignoreUrls: true }],
  },
  overrides: [
    // node files
    {
      files: [
        'testem.js',
        'ember-cli-build.js',
        'config/**/*.js',
        'lib/*/index.js'
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      }
    },

    // test files
    {
      files: ['tests/**/*.js'],
      excludedFiles: ['tests/dummy/**/*.js'],
      env: {
        embertest: true
      }
    }
  ]
};
