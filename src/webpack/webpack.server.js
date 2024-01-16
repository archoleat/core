const serverConfig = ({ port = 3000, publicFolder = 'dist', watchFiles = [] }) => ({
  port,
  watchFiles,
  hot: 'only',
  open: true,
  static: publicFolder,
});

export default serverConfig;
