export default {
  '**/*.md': 'remark --quiet --frail',
  '**/*': 'prettier --write',
  'src/**/*.js': 'eslint --fix',
};
