var task1 = require('../task1');

describe('task 1 solver', () => {
  it('should return 13', () => {
  	expect(task1.solveWithEs6Feature(2)).toEqual([4, 10, 14]);
  });

  it('should be able to map an array', () => {
    expect(task1.solveWithEs6Feature(2)).toEqual([4, 10, 14]);
  });
})
