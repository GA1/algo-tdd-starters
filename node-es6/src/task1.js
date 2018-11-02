const Queue = require('./queue').Queue;

function solve() {
  const q = new Queue()
  q.enqueue(7)
  return q.dequeue()
}

module.exports.solve = solve;