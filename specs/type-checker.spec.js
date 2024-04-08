import { assert, describe, test as spec } from 'vitest';

import { typeChecker } from '../src/helpers/type-checker.js';

describe('typeChecker', () => {
  spec('should not throw an error for a valid array argument', () => {
    assert.doesNotThrow(() => {
      typeChecker([], 'files', 'array');
    });
  });

  spec('should throw an error for an invalid array argument', () => {
    assert.throws(() => {
      typeChecker('', 'files', 'array');
    }, "The 'files' argument must be an 'array'");
  });

  spec('should not throw an error for a valid string argument', () => {
    assert.doesNotThrow(() => {
      typeChecker('.js', 'extension', 'string');
    });
  });

  spec('should throw an error for an invalid string argument', () => {
    assert.throws(() => {
      typeChecker({}, 'extension', 'string');
    }, "The 'extension' argument must be an 'string'");
  });

  spec('should not throw an error for a valid number argument', () => {
    assert.doesNotThrow(() => {
      typeChecker(10, 'value', 'number');
    });
  });

  spec('should throw an error for an invalid number argument', () => {
    assert.throws(() => {
      typeChecker('', 'value', 'number');
    }, "The 'value' argument must be an 'number'");
  });

  spec('should not throw an error for a valid boolean argument', () => {
    assert.doesNotThrow(() => {
      typeChecker(true, 'isInit', 'boolean');
    });
  });

  spec('should throw an error for an invalid boolean argument', () => {
    assert.throws(() => {
      typeChecker('', 'isInit', 'boolean');
    }, "The 'isInit' argument must be an 'boolean'");
  });

  spec('should not throw an error for a valid undefined argument', () => {
    assert.doesNotThrow(() => {
      typeChecker(undefined, 'hasProperty', 'undefined');
    });
  });

  spec('should throw an error for an invalid undefined argument', () => {
    assert.throws(() => {
      typeChecker('', 'hasProperty', 'undefined');
    }, "The 'hasProperty' argument must be an 'undefined'");
  });

  spec('should not throw an error for a valid symbol argument', () => {
    assert.doesNotThrow(() => {
      typeChecker(Symbol(''), 'method', 'symbol');
    });
  });

  spec('should throw an error for an invalid symbol argument', () => {
    assert.throws(() => {
      typeChecker('', 'method', 'symbol');
    }, "The 'method' argument must be an 'symbol'");
  });

  spec('should not throw an error for a valid null argument', () => {
    assert.doesNotThrow(() => {
      typeChecker(null, 'options', 'object');
    });
  });

  spec('should throw an error for an invalid null argument', () => {
    assert.throws(() => {
      typeChecker('', 'options', 'object');
    }, "The 'options' argument must be an 'object'");
  });

  spec('should not throw an error for a valid object argument', () => {
    assert.doesNotThrow(() => {
      typeChecker({}, 'options', 'object');
    });
  });

  spec('should throw an error for an invalid object argument', () => {
    assert.throws(() => {
      typeChecker('', 'options', 'object');
    }, "The 'options' argument must be an 'object'");
  });

  spec('should not throw an error for a valid bigint argument', () => {
    assert.doesNotThrow(() => {
      typeChecker(
        1_234_567_890_123_456_789_012_345_678_901_234_567_890n,
        'hash',
        'bigint',
      );
    });
  });

  spec('should throw an error for an invalid bigint argument', () => {
    assert.throws(() => {
      typeChecker('', 'hash', 'bigint');
    }, "The 'hash' argument must be an 'bigint'");
  });
});
