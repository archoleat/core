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

const {
  build: { js: jsBuild },
  src: { js: jsSource },
} = PATHS;
const { notifier } = HELPERS;
const {
  webpack,
  gulp: { dest, src },
} = PLUGINS;

export default (taskName, config) =>
  src(jsSource)
    .pipe(notifier.errorHandler(taskName))
    .pipe(
      webpack({
        config,
      }),
    )
    .pipe(dest(jsBuild));
