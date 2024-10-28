/**
 * Creates an alias for a value and passes it to a consumer function
 * 
 * @example
 * ``` typescript
 * import { alias } from '@ppz/sugar'
 * 
 * const data = {
 *   user: {
 *     birthday: new Date()
 *   }
 * }
 * 
 * const result = alias(data.user.birthday, bd => {
 *   // const some_val = ...
 *   // const some_other_val = ...
 *   // return ...
 * })
 * ```
 */
export
function alias<V, Result>(v: V, consume: (v: V) => Result): Result {
  return consume(v)
}
