// @ts-check

import { assertStrictEquals } from '@std/assert'
import { alias } from '../lib/mod.ts'

Deno.test('alias works', () => {
  const result = alias(1, a => {
    assertStrictEquals(1, a)
    return 'hello'
  })
  assertStrictEquals(result, 'hello')
})
