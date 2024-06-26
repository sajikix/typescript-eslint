import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

export default (
  plugin: FlatConfig.Plugin,
  parser: FlatConfig.Parser,
): FlatConfig.Config => ({
  name: 'typescript-eslint/base',
  languageOptions: {
    parser,
    sourceType: 'module',
  },
  plugins: {
    '@typescript-eslint': plugin,
  },
});
