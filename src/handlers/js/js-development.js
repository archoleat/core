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

import PLUGINS from '../../settings/plugins.js';

import webpackConfig from '../../webpack/webpack.production.js';

import outputConfig from '../../configs/output.config.js';
import PROJECT_CONFIG from '../../configs/project.config.js';

import formatterJS from '../../formatters/js.js';

const { entry } = PROJECT_CONFIG;
const { TerserPlugin } = PLUGINS;

const webPackBeautifyConfig = { ...webpackConfig };

webPackBeautifyConfig.optimization = {
  minimizer: [
    new TerserPlugin({
      extractComments: false,
      terserOptions: {
        compress: {
          defaults: false,
          unused: true,
        },
        format: {
          beautify: true,
        },
        keep_classnames: true,
        keep_fnames: true,
        mangle: false,
      },
    }),
  ],
};
webPackBeautifyConfig.output = outputConfig(`${entry ?? 'main'}.js`);

const JSDevelopmentHandler = () =>
  formatterJS('JSDevelopmentHandler', webPackBeautifyConfig);

export default JSDevelopmentHandler;
