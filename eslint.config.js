import js from '@eslint/js';
import ts from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import stylistic from '@stylistic/eslint-plugin';
import vueParser from 'vue-eslint-parser';

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: true,
  }),
  {
    files: ['**/*.ts', '**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
      },
    },
  },
  {
    ignores: [
      '.git/**',
      'dist/**',
      'node_modules/**',
      'public/**',
    ],
  },
  {
    rules: {
      'no-debugger': 'off',
      'no-unused-vars': 'off',
      '@stylistic/lines-between-class-members': 'off',
      '@stylistic/object-curly-spacing': ['warn', 'always'],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
      'vue/max-attributes-per-line': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-mutating-props': 'off',
      'vue/object-curly-spacing': ['warn', 'always'],
      'vue/one-component-per-file': 'off',
    },
  },
);
