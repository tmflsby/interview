import { fn, name, obj } from './a'
import b from './b'
import xxx from './c'

console.log('this is index.js')

const sum = (a, b) => a + b

const res = sum(10, 20)

console.log(res)

fn()
b.fn()
console.log(name)
console.log(b.name)
console.log(obj)
console.log(b.obj)
console.log(xxx)
