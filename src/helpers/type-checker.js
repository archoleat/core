/// /////////////////////////////////////////////////////////////////////////
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
/// /////////////////////////////////////////////////////////////////////////

const typeChecker = (argument, argumentName, argumentType) => {
  const message = `The '${argumentName}' argument must be an '${argumentType}'`;
  const isArray = argumentType === 'array';

  if (isArray && !Array.isArray(argument)) {
    throw new Error(message);
  }

  if (!isArray && typeof argument !== argumentType) {
    throw new Error(message);
  }
};

export default typeChecker;