
function solve(a) {
  return 7
}

function solveWithEs6Feature(a) {
  return [a, 5, 7].map(n => n*2)
}

module.exports.solve = solve;
module.exports.solveWithEs6Feature = solveWithEs6Feature;