import { omit } from 'lodash-es'
import { util1, util2 } from 'utils'
function fn1() {
  return omit({ a: { a1: 1, a2: 2 } }, 'a.a1')
}

console.log('app omit', JSON.stringify(fn1()))
console.log('utils omit', JSON.stringify(util1()))
// console.log('app defalutTo', JSON.stringify(defalutTo(null, 2)))
console.log('utils defalutTo', JSON.stringify(util2()))
