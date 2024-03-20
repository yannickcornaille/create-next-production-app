import path from 'path';

const buildEslintCommand = (filenames) =>
  `next lint --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

const stylelintCommand = 'stylelint "**/*.css"';

const lintStagedConfig = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '*.css': [stylelintCommand],
};

export default lintStagedConfig;
