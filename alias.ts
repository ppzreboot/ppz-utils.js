export
function alias<V, Result>(v: V, consume: (v: V) => Result): Result {
  return consume(v)
}
