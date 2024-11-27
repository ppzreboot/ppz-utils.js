// @ts-check
import { equal } from 'node:assert/strict'
import { describe, it } from 'node:test'

import { alias } from './alias.js'
import { F } from './fp.js'

describe('alias', () => {
  const user = F({
    basic: F({
      address: F({
        name: 'PPz'
      })
    })
  })

  it('take value and return', () => {
    const result = alias(user.basic.address.name, name => {
      equal(name, 'PPz')
      return 'hello, ' + name
    })
    equal(result, 'hello, PPz')
  })
})
