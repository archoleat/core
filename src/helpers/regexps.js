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

const HTML_EXTENSION_PATTERN = '.html';
const PUG_EXTENSION_PATTERN = '.pug';
const SPLIT_CHARS_PATTERN = String.raw`(?:_|__|-|\s)`;

const REGEXPS = {
  HTML_EXTENSION_PATTERN,
  PUG_EXTENSION_PATTERN,
  FILE_EXTENSION_PATTERN: /\.[^.]+$/,
  ITALIC_PATTERN: new RegExp(`${SPLIT_CHARS_PATTERN}?(italic)`, 'i'),
  JS_EXTENSION_PATTERN: /.js$/,
  NODE_MODULES_PATTERN: /node_modules/,
  PUG_EXTENSION_PATTERN_PATTERN: new RegExp(`${PUG_EXTENSION_PATTERN}$`),
  SCSS_EXTENSION_PATTERN: /.s[ac]ss$/,
  VARIABLE_FONT_PATTERN: new RegExp(`${SPLIT_CHARS_PATTERN}?(var)`, 'i'),
};

export { REGEXPS };
