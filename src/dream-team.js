module.exports = function createDreamTeam(arr) {
    if (!Array.isArray(arr)) return false;
    return arr.reduce((sum, elem) => {
        if (typeof elem === 'string') {
            sum += elem.trim()[0].toUpperCase();
        }
        return sum;
    }, '').split('').sort().join('');
};
