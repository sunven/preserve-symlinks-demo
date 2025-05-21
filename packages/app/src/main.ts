import {
  // foo ,
  defaultTo,
} from 'lodash-es'
import { util1 } from 'utils'
// console.log('lodash-es foo', foo())
console.log('app defaultTo', JSON.stringify(defaultTo(null, 2)))
console.log('utils util1', JSON.stringify(util1()))
