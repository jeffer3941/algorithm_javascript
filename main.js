const {Stack} = require('./pilhas/stack-array')


const stack = new Stack()

// console.log(stack.isEmpty())

stack.push(5)
stack.push(8)

console.log(stack.peek())

stack.push(11)

console.log(stack.isEmpty())


stack.pop()

stack.pop()

console.log(stack.size());
