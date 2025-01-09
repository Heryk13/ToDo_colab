import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginNext from '@next/eslint-plugin-next'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", 'prettier'),
  ...compat.config({
    extends: ['next'],
    rules: {
      ...pluginNext.configs.recommended.rules
    }
  }),
];

export default eslintConfig;
