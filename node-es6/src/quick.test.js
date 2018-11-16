const quickSolver = require('./quick');

describe('quick solver', () => {

  function areFromStartToEndLowerThan(A, startInclusive, endExclusive, pivot) {
    for (let i = startInclusive; i < endExclusive - 1; i++) {
      if (A[i] > pivot) {
        return false
      }
    }
    return true
  }

  function areFromStartToEndGreaterThan(A, startInclusive, endExclusive, pivot) {
    for (let i = startInclusive; i < endExclusive - 1; i++) {
      if (A[i] < pivot) {
        return false
      }
    }
    return true
  }

  it('[2]', () => {
    const A = [2];
    const result = quickSolver.quick(A);
    expect(result).toEqual(0);
  })

})
