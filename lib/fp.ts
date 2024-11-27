/** freeze/functional object */
export
const F = <T extends Object>(obj: T) => Object.freeze({ ...obj })

/**
 * `f_obj` is a set of primatives.
 * A cloned `f_obj` should be the same with the original `f_obj`.
 * Make another `f_obj` with the same primatives and diffrent reference is pointless.
 * @deprecated
 */
export
const f_clone = <T>(obj: T) => obj

/** make a new f_obj with a new property's value */
export
const f_new = <T extends Object, K extends keyof T>(obj: T, key: K, value: T[K]) => ({
  ...obj,
  [key]: value,
})

/** compare two f_obj */
export
const f_equal_obj = <T extends Object>(a: T, b: T): boolean => {
  if (a === b) return true

  const a_keys = Object.keys(a)
  const b_keys = Object.keys(b)
  if (a_keys.length !== b_keys.length)
    return false
  for (const k of a_keys)
    // @ts-ignore
    if (!f_equal_obj(a[k], b[k]))
      return false
  return true
}
