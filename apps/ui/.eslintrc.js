module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },

  plugins: [
    "react"
  ],

  settings: {
    react: {
      pragma: "React",
      version: "0.14.0"
    }
  },

  extends: "eslint:recommended", // http://eslint.org/docs/rules/

  globals: {
    window: true,
    describe: true,
    it: true,
    Promise: true
  },

  rules: {
    "no-debugger": 0,
    "no-console": 0,
    "no-var": 1,
    "no-unused-vars": 0,

    "react/display-name": 0,
    "react/jsx-no-undef": 2,
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-unknown-property": 2,
    "react/prop-types": 2,
    "react/self-closing-comp": 2,
    "react/wrap-multilines": 2,
  }
};
