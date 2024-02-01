////////////////////////////////////////////////////////////////////////////
//
// Copyright 2023 nikkeyl.
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

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import PATHS from '../settings/paths.js';
import HELPERS from '../settings/helpers.js';
import PLUGINS from '../settings/plugins.js';

import CSSLoaderConfig from '../configs/css-loader.config.js';
import outputConfig from '../configs/output.config.js';
import PROJECT_CONFIG from '../configs/project.config.js';
import replaceLoaderConfig from '../configs/replace-loader.config.js';
import resolveConfig from '../configs/resolve.config.js';

const {
  entry,
  isBabel,
  cache: { settings },
  formatters: {
    languages: { isPugPretty, sassOutputStyle },
  },
} = PROJECT_CONFIG;
const {
  ASSETS_FOLDER,
  PAGES_FOLDER,
  SRC_FOLDER,
  babelConfigFile,
  src: { favicon: faviconSource, htaccess: htaccessSource, robots: robotsSource },
} = PATHS;
const {
  pugPages,
  REGEXPS: {
    HTML_EXTENSION,
    JS_EXTENSION_REGEX,
    NODE_MODULES_REGEX,
    PUG_EXTENSION_REGEX,
    SCSS_EXTENSION_REGEX,
  },
} = HELPERS;
const { CopyPlugin, HtmlWebpackPlugin, join, TerserPlugin } = PLUGINS;

export default {
  mode: 'production',
  cache: settings ?? {
    type: 'filesystem',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  output: outputConfig(`${entry ?? 'main'}.min.js`),
  plugins: [
    ...pugPages.map(
      (pugPage) =>
        new HtmlWebpackPlugin({
          filename: join(
            '../..',
            pugPage.replace(PUG_EXTENSION_REGEX, HTML_EXTENSION),
          ),
          inject: false,
          minify: false,
          production: true,
          template: join(SRC_FOLDER, PAGES_FOLDER, pugPage),
        }),
    ),
    new MiniCssExtractPlugin({
      filename: '../css/style.css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: faviconSource,
          to: '../../',
          noErrorOnMissing: true,
        },
        {
          from: robotsSource,
          to: '../../',
          noErrorOnMissing: true,
        },
        {
          from: htaccessSource,
          to: '../../',
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: JS_EXTENSION_REGEX,
        exclude: NODE_MODULES_REGEX,
        use: isBabel
          ? [
              {
                loader: 'babel-loader',
                options: {
                  configFile: babelConfigFile,
                },
              },
            ]
          : undefined,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: SCSS_EXTENSION_REGEX,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'string-replace-loader',
            options: replaceLoaderConfig({
              startPath: '../',
            }),
          },
          {
            loader: 'css-loader',
            options: CSSLoaderConfig(),
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: sassOutputStyle ?? 'expanded',
              },
            },
          },
        ],
      },
      {
        test: PUG_EXTENSION_REGEX,
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
              pretty: isPugPretty ?? true,
              self: true,
            },
          },
        ],
      },
    ],
  },
  resolve: resolveConfig,
};
