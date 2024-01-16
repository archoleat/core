const CSSLoaderConfig = ({
  endPath = '',
  importLoaders = 0,
  isSourceMap = false,
} = {}) => ({
  importLoaders,
  modules: false,
  sourceMap: isSourceMap,
  url: {
    filter: (url) => {
      !url.includes(`img${endPath}`) ?? !url.includes(`fonts${endPath}`);
    },
  },
});

export default CSSLoaderConfig;
