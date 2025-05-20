import { omit, defalutTo } from 'lodash-es'
export function util1() {
  return omit({ a: { a1: 1, a2: 3111 } }, 'a.a1')
}
export function util2() {
  return defalutTo(null, 3)
}
