import { assert, describe, test as spec } from 'vitest';

import { trimString } from '../src/helpers/trim-string.js';

describe('trimString', () => {
  spec('should remove vowels from a string', () => {
    const result = trimString('Hello World', /[aeiou]/gi);
    assert.strictEqual(result, 'hll wrld');
  });

  spec('should return an empty string if input is an empty string', () => {
    const result = trimString('', /[aeiou]/gi);
    assert.strictEqual(result, '');
  });

  spec('should handle non-string input gracefully', () => {
    const result = trimString(123, /[aeiou]/gi);
    assert.strictEqual(result, '123');
  });
});
