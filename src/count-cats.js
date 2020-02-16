module.exports = function countCats(matrix) {
    let str = matrix.join(',');
    const arr = str.split(',');
    return arr.filter((elem) => elem === '^^').length;
};
