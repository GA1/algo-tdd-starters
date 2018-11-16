// For an array A call its first element: pivot.
// Task: write a function, that modifies the  input array so that, so that afterwards the array is divided into 3 parts
// - elements from 0 to j - 1 being the elements smaller than the pivot
// - element j is the pivot
// - elements from j + 1 to the end of the Array being the elements greater than the pivot
// The function quick has to return j - the index of the pivot
//
// For example:
// The array:
// after calling "quick" on A = [7, 2, 13, 11, 3, 19, 17], A should be something like
// [ 3, 2, 7, 11, 13, 19, 17 ] or [ 2, 3, 7, 11, 19, 13, 17 ] etc...
// and the result of the "quick" function should be 2
//
// additional musts:
// function quick should work "in place", that is it should not create any additional array
//   => its additional space complexity should be O(1)
// it should be no worse than O(N) in terms of space complexity
//   => it should look up each element of the input array at most a constant number of times, where the constant is independent of the size of the input

function quick(A) {
  return 0
}

module.exports.quick = quick;