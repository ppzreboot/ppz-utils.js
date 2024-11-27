/** freeze/functional object */
export
const F = <T extends Object>(obj: T) => Object.freeze(obj)

/**  */
export
const f_equal_obj = <T extends Object>(a: T, b: T) => {
  if (a === b) return true

  const a_keys = Object.keys(a)
  const b_keys = Object.keys(b)
  if (a_keys.length !== b_keys.length)
    return false
  for (const k of a_keys)
    // @ts-ignore
    if (a[k] !== b[k])
      return false
  return true
}
