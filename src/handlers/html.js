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

import { HTMLMinConfig } from '../configs/html-min.config.js';
import { PROJECT_CONFIG } from '#project-config';
import { typografConfig } from '../configs/typograf.config.js';
import { versionNumberConfig } from '../configs/version-number.config.js';

const {
  formatters: { isTypography },
} = PROJECT_CONFIG;
const {
  buildFolder,
  build: { HTML },
} = PATHS;
const { notifier } = HELPERS;
const {
  htmlMin,
  join,
  typograf,
  versionNumber,
  webpHtmlNoSvg,
  when,
  gulp: { dest, src },
} = PLUGINS;

const HTMLHandler = (isWebp) =>
  src(join(buildFolder, HTML))
    .pipe(notifier.errorHandler('HTMLHandler'))
    .pipe(when(isWebp, webpHtmlNoSvg()))
    .pipe(versionNumber(versionNumberConfig))
    .pipe(when(isTypography, typograf(typografConfig)))
    .pipe(htmlMin(HTMLMinConfig))
    .pipe(dest(buildFolder));

export { HTMLHandler };
