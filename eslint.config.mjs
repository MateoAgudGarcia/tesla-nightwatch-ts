// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  extends: [eslint.configs.recommended, ...tseslint.configs.recommended],
  ignores: [
    'node_module/',
    'allure-report/',
    'allure-results/',
    '*.conf.cjs',
    '*/*.cjs',
  ],
  rules: {
    '@typescript-eslint/no-unused-expressions': 'off',
  },
});
