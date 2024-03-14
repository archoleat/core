////////////////////////////////////////////////////////////////////////////
//
// Copyright 2023 Archoleat.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
////////////////////////////////////////////////////////////////////////////

import PATHS from '../settings/paths.js';
import HELPERS from '../settings/helpers.js';
import PLUGINS from '../settings/plugins.js';

import CSSLoaderConfig from '../configs/css-loader.config.js';
import outputConfig from '../configs/output.config.js';
import PROJECT_CONFIG from '../configs/project.config.js';
import replaceLoaderConfig from '../configs/replace-loader.config.js';
import resolveConfig from '../configs/resolve.config.js';

import serverConfig from './webpack.server.js';

const {
  entry,
  server: { port, publicFolder, sourceMapType, stats, watchFiles },
} = PROJECT_CONFIG;
const {
  ASSETS_FOLDER,
  IMAGES_FOLDER,
  PAGES_FOLDER,
  SCRIPTS_FOLDER,
  SRC_FOLDER,
  src: {
    favicon: faviconSource,
    images: imagesSource,
    js: jsSource,
    json: jsonSource,
    pug: pugSource,
    markdown: markdownSource,
  },
} = PATHS;
const {
  pugPages,
  REGEXPS: {
    HTML_EXTENSION_PATTERN,
    JS_EXTENSION_PATTERN,
    NODE_MODULES_PATTERN,
    PUG_EXTENSION_PATTERN_PATTERN,
    SCSS_EXTENSION_PATTERN,
  },
} = HELPERS;
const { CopyPlugin, HtmlWebpackPlugin, join } = PLUGINS;

export default {
  mode: 'development',
  devtool: sourceMapType ?? 'inline-source-map',
  stats: stats ?? 'errors-warnings',
  optimization: {
    minimize: false,
  },
  entry: jsSource,
  output: outputConfig(
    join(ASSETS_FOLDER, SCRIPTS_FOLDER, `${entry ?? 'main'}.min.js`),
  ),
  devServer: serverConfig({
    port,
    publicFolder,
    watchFiles: [
      imagesSource,
      jsonSource,
      markdownSource,
      pugSource,
      ...(watchFiles ?? []),
    ],
  }),
  plugins: [
    ...pugPages.map(
      (pugPage) =>
        new HtmlWebpackPlugin({
          filename: pugPage.replace(
            PUG_EXTENSION_PATTERN_PATTERN,
            HTML_EXTENSION_PATTERN,
          ),
          inject: false,
          minify: false,
          production: false,
          template: join(SRC_FOLDER, PAGES_FOLDER, pugPage),
        }),
    ),
    new CopyPlugin({
      patterns: [
        {
          from: join(SRC_FOLDER, IMAGES_FOLDER),
          to: join(ASSETS_FOLDER, IMAGES_FOLDER),
          noErrorOnMissing: true,
        },
        {
          from: faviconSource,
          to: './',
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: JS_EXTENSION_PATTERN,
        exclude: NODE_MODULES_PATTERN,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: SCSS_EXTENSION_PATTERN,
        use: [
          'style-loader',
          {
            loader: 'string-replace-loader',
            options: replaceLoaderConfig({
              startPath: '../',
            }),
          },
          {
            loader: 'css-loader',
            options: CSSLoaderConfig({
              endPath: '/',
              importLoaders: 1,
              isSourceMap: true,
            }),
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: PUG_EXTENSION_PATTERN_PATTERN,
        use: [
          {
            loader: 'string-replace-loader',
            options: replaceLoaderConfig({
              startPath: `${ASSETS_FOLDER}/`,
            }),
          },
          {
            loader: 'pug-loader',
            options: {
              self: true,
            },
          },
        ],
      },
    ],
  },
  resolve: resolveConfig,
};
