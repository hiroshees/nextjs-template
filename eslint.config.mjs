import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import perfectionistPlugin from 'eslint-plugin-perfectionist';
import prettierConfig from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default tseslint.config(
  {
    // 読み込むファイル
    files: ['*.ts', '*.tsx'],
  },
  {
    // 無視するファイル
    ignores: ['**/.next/**/*'],
  },
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  //...tailwind.configs['flat/recommended'],
  {
    // @typescript-eslintに関する設定
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': typescript,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      ...typescript.configs['recommended-type-checked'].rules,
      ...typescript.configs['stylistic-type-checked'].rules,
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: { attributes: false },
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      import: importPlugin,
    },
    rules: {
      'func-style': ['error', 'declaration', { allowArrowFunctions: false }],
      'prefer-arrow-callback': ['error', { allowNamedFunctions: false }],
      'import/no-default-export': 'error',
    },
  },
  {
    files: [
      '**/page.tsx',
      '**/layout.tsx',
      '**/loading.tsx',
      '**/notFound.tsx',
      '**/template.tsx',
      '**/default.tsx',
      '**/error.tsx',
      '**/global-error.tsx',
      'next.config.ts',
      'postcss.config.mjs',
      'tailwind.config.ts',
    ],
    rules: {
      'import/no-default-export': 'off', // 上記ファイルではdefaultを許容する
      'import/prefer-default-export': 'error', // 上記ファイルではdefaultにする
    },
  },
  {
    // eslint-plugin-import の設定
    plugins: { import: importPlugin },
    rules: {
      'import/order': [
        // import の並び順を設定
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling'],
            'object',
            'type',
            'index',
          ],
          'newlines-between': 'always',
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: { order: 'asc', caseInsensitive: true },
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
          ],
        },
      ],
    },
  },
  {
    // eslint-plugin-unused-imports の設定
    plugins: { 'unused-imports': unusedImportsPlugin },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off', // 重複エラーを防ぐため typescript-eslint の方を無効化
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    // eslint-plugin-react の設定
    settings: {
      react: {
        version: 'detect',
      },
    },
    // recommended に含まれていない eslint-plugin-react 関連のルール
    rules: {
      'react/destructuring-assignment': 'error', // Props などの分割代入を強制
      'react/function-component-definition': [
        // コンポーネントの定義方法を関数定義に統一
        'error',
        {
          namedComponents: 'function-declaration',
        },
      ],
      'react/hook-use-state': 'error', // useState の返り値の命名を [value, setValue] に統一
      'react/jsx-boolean-value': 'error', // boolean 型の Props の渡し方を統一
      'react/jsx-fragments': 'error', // React Fragment の書き方を統一
      'react/jsx-curly-brace-presence': 'error', // Props と children で不要な中括弧を削除
      'react/jsx-no-useless-fragment': 'error', // 不要な React Fragment を削除
      'react/jsx-sort-props': 'error', // Props の並び順をアルファベット順に統一
      'react/self-closing-comp': 'error', // 子要素がない場合は自己終了タグを使う
      'react/jsx-pascal-case': 'error', // コンポーネント名をパスカルケースに統一
      'react/no-danger': 'error', // dangerouslySetInnerHTML を許可しない
      'react/prop-types': 'off', // Props の型チェックは TS で行う & 誤検知があるため無効化
    },
  },
  {
    // eslint-plugin-react-hooks の設定
    rules: {
      'react-hooks/exhaustive-deps': 'error', // recommended では warn のため error に上書き
    },
  },
  {
    // eslint-plugin-perfectionist の設定
    plugins: { perfectionist: perfectionistPlugin },
    rules: {
      'perfectionist/sort-interfaces': 'warn', // interface のプロパティの並び順をアルファベット順に統一
      'perfectionist/sort-object-types': 'warn', // Object 型のプロパティの並び順をアルファベット順に統一
    },
  },
  prettierConfig // Prettierとの競合防止
);
