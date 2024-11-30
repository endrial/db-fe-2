import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  daStyle,
  {
    rules: {
      'no-console': 'off',
      'no-undef': 'off',
      'no-unused-vars': 'off',
    },
  },
];
