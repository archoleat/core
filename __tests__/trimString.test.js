import { assert } from 'chai';
import { describe, it } from 'mocha';

import trimString from '../helpers/trimString.js';

describe('trimString', () => {
  it('should remove vowels from a string', () => {
    const result = trimString('Hello World', /[aeiou]/gi);
    assert.strictEqual(result, 'hll wrld');
  });

  it('should return an empty string if input is an empty string', () => {
    const result = trimString('', /[aeiou]/gi);
    assert.strictEqual(result, '');
  });

  it('should handle non-string input gracefully', () => {
    const result = trimString(123, /[aeiou]/gi);
    assert.strictEqual(result, '123');
  });
});
