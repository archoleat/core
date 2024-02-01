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

const CSSLoaderConfig = ({
  endPath = '',
  importLoaders = 0,
  isSourceMap = false,
} = {}) => ({
  importLoaders,
  modules: false,
  sourceMap: isSourceMap,
  url: {
    filter: (url) => {
      !url.includes(`img${endPath}`) ?? !url.includes(`fonts${endPath}`);
    },
  },
});

export default CSSLoaderConfig;
