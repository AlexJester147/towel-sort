

module.exports = function towelSort (matrix) {
 if (typeof matrix == 'undefined' || matrix.length == 0) return [];
 else {
  for (let i=1; i < matrix.length; i+=2){
    matrix[i] = matrix[i].reverse();
  }
  matrix = matrix.split(',').join('');
  
  for (let i=0; i < matrix.length; i++){
    matrix[i] = Number(matrix[i]);
  }

  return matrix;
}
};


