/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'no-constant-condition': 'off',
    'no-debugger': 'off',
    'no-undef': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-mutating-props': ['off', { shallowOnly: 'true' }],
    'vue/no-setup-props-destructure': 'off',
  },
};
