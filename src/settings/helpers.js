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

import FLAGS from '../helpers/flags.js';
import REGEXPS from '../helpers/regexps.js';

import notifier from '../helpers/notifier.class.js';
import pugPages from '../helpers/pug-pages.js';
import status from '../helpers/status.js';
import trimString from '../helpers/trim-string.js';
import typeChecker from '../helpers/type-checker.js';

export default {
  FLAGS,
  REGEXPS,
  notifier,
  pugPages,
  status,
  trimString,
  typeChecker,
};
