/// /////////////////////////////////////////////////////////////////////////
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
/// /////////////////////////////////////////////////////////////////////////

import { PATHS } from '#paths';
import { HELPERS } from '#helpers';
import { PLUGINS } from '#plugins';

const { buildFolder, cacheFolder, rootFolder } = PATHS;
const { notifier } = HELPERS;
const {
  join,
  zipPlugin,
  gulp: { dest, src },
} = PLUGINS;

const archiver = () =>
  src(join(buildFolder, '**/*'))
    .pipe(notifier.errorHandler('zip'))
    .pipe(zipPlugin(`${rootFolder}.zip`))
    .pipe(dest(cacheFolder));

export { archiver };
