import PATHS from '../settings/paths.js';

const { IMAGES_FOLDER } = PATHS;

const replaceLoaderConfig = ({ startPath }) => ({
  flags: 'g',
  replace: `${startPath}img`,
  search: `@${IMAGES_FOLDER}`,
});

export default replaceLoaderConfig;
