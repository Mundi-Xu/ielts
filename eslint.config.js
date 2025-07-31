import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: true,
    typescript: true,
  },
  {
    rules: {
      // Allow ts generic on script setup
      'vue/block-tag-newline': 'off',
      'vue/component-options-name-casing': ['error', 'PascalCase'],
      'vue/custom-event-name-casing': ['error', 'camelCase'],
      'vue/define-macros-order': 'off',
      'vue/html-comment-content-spacing': ['error', 'always', {
        exceptions: ['-'],
      }],
      'vue/no-restricted-v-bind': ['error', '/^v-/'],
      'vue/no-unused-refs': 'error',
      'vue/padding-line-between-blocks': 'error',
      'vue/prefer-separate-static-class': 'error',
      'vue/prefer-true-attribute-shorthand': 'error',
      'vue/require-direct-export': 'error',
      'vue/require-emit-validator': 'off',
    },
  },
  {
    ignores: [
      'dist',
      'node_modules',
      'coverage',
      '*.min.*',
      'public',
    ],
  },
)
