const quickSolver = require('../quick');

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

  it('[1, 2]', () => {
    const A = [1, 2];
    const result = quickSolver.quick(A);
    expect(result).toEqual(0);
    expect(A).toEqual([1, 2]);
  })

  it('[1, 2]', () => {
    const A = [2, 1];
    const result = quickSolver.quick(A);
    expect(result).toEqual(1);
    expect(A).toEqual([1, 2]);
  })

  it('[3, 2, 1]', () => {
    const A = [3, 2, 1];
    const result = quickSolver.quick(A);
    expect(result).toEqual(2);
    expect(A).toEqual([1, 2, 3])
  })

  it('[1, 2, 3]', () => {
    const A = [1, 2, 3];
    const result = quickSolver.quick(A);
    expect(result).toEqual(0);
    expect(A).toEqual([1, 2, 3])
  })

  it('[7, 2, 13, 11, 3, 17, 19]', () => {
    const A = [7, 2, 13, 11, 3, 19, 17];
    const result = quickSolver.quick(A);
    expect(result).toEqual(2);
    expect(areFromStartToEndLowerThan(A, 0, 2, 7)).toEqual(true)
    expect(areFromStartToEndGreaterThan(A, 3, 7, 7)).toEqual(true)
  })



})