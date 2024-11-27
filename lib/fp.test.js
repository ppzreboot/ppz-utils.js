// @ts-check
import { equal, throws, notEqual } from 'node:assert/strict'
import { describe, it } from 'node:test'

import { F, f_equal_obj, f_new } from './fp.js'

describe('functional programming', () => {
  const user = F({
    basic: F({
      address: F({
        name: 'PPz'
      })
    })
  })

  describe('F', () => {
    it('immutable', () => {
      throws(() => {
        // @ts-ignore
        user.basic = 2
      }, {
        message: /Cannot assign to read only property/
      })
    })

    it('new object, same values with old, different reference', () => {
      const source = { tel: 110 }
      // notEqual(source, F(source))
      equal(true, f_equal_obj(source, F(source)))
    })
  })

  describe('f_equal_obj', () => {
    it('same reference', () => {
      equal(true, f_equal_obj(user, user))
    })
    it('same deep values', () => {
      equal(true, f_equal_obj(user, {
        basic: {
          address: {
            name: 'PPz'
          }
        }
      }))
    })
  })

  describe('f_new', () => {
    it('work', () => {
      const old = F({ tel: 120, name: 'PPz' })
      const new_obj = f_new(old, 'tel', 114)
      equal(new_obj.name, 'PPz')
      equal(new_obj.tel, 114)
    })
    it('no influence on old', () => {
      const old = F({ tel: 120, name: 'PPz' })
      const new_obj = f_new(old, 'tel', 114)
      equal(true, f_equal_obj(old, { tel: 120, name: 'PPz' }))
    })
  })
})
