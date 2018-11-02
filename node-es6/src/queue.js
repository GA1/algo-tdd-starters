function Queue() {
  this.first = null
  this.last = null
  this.N = 0
}

Queue.prototype.isEmpty = function() {
  return this.size() === 0
}


Queue.prototype.size = function() {
  return this.N
}

Queue.prototype.enqueue = function(n) {
  const oldLast = this.last
  const newLast = {
    item: n,
    next: null,
  }
  if (this.isEmpty())
    this.first = newLast
  else
    oldLast.next = newLast
  this.last = newLast
  this.N++
}

Queue.prototype.dequeue = function() {
  if (this.isEmpty())
    throw Error('Queue underflow')
  const item = this.first.item
  this.first = this.first.next
  this.N--
  if (this.isEmpty())
    this.last = null
  return item
}

Queue.prototype.peek = function() {
  if (this.isEmpty())
    throw Error('Queue underflow')
  const item = this.first.item
  return item
}

module.exports.Queue = Queue