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

import PATHS from '../../settings/paths.js';
import HELPERS from '../../settings/helpers.js';
import PLUGINS from '../../settings/plugins.js';

import imageMinConfig from '../../configs/image-min.config.js';

const {
  build: { images: imagesBuild },
  src: { images: imagesSource, svg: svgSource },
} = PATHS;
const { notifier } = HELPERS;
const {
  imageMin,
  newer,
  webp,
  when,
  gulp: { dest, src },
} = PLUGINS;

const imageHandler = (isWebp) =>
  src(imagesSource)
    .pipe(notifier.errorHandler('imageHandler'))
    .pipe(newer(imagesBuild))
    .pipe(when(isWebp, webp()))
    .pipe(when(isWebp, dest(imagesBuild)))
    .pipe(when(isWebp, src(imagesSource)))
    .pipe(when(isWebp, newer(imagesBuild)))
    .pipe(imageMin(imageMinConfig))
    .pipe(dest(imagesBuild))
    .pipe(src(svgSource))
    .pipe(dest(imagesBuild));

export default imageHandler;
