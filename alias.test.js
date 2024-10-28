// @ts-check

import test from 'node:test'
import { strictEqual } from 'node:assert'
import { alias } from './mod.js'

test('alias works', () => {
  const result = alias(1, a => {
    strictEqual(1, a)
    return 'hello'
  })
  strictEqual(result, 'hello')
})
