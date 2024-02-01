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

import PROJECT_CONFIG from './project.config.js';

const { language } = PROJECT_CONFIG;

const typografConfig = {
  locale: language ?? 'en-US' === 'ru' ? ['ru', 'en-US'] : ['en-US'],
  enableRule: [
    'common/html/e-mail',
    'common/html/p',
    'common/html/processingAttrs',
    'common/html/url',
    'common/other/repeatWord',
    'common/other/replaceNbsp',
    'common/space/delLeadingBlanks',
    'ru/dash/de',
    'ru/money/ruble',
    'ru/optalign/bracket',
    'ru/optalign/comma',
    'ru/optalign/quote',
    'ru/other/accent',
  ],
};

export default typografConfig;
