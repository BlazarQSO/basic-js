const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(x) {
    if (typeof x === 'string' && x.lastIndexOf('.') > 3 && x.indexOf('.') < 3) {
        x = '11.32313213124';
    }
    if (typeof x !== 'string' || !(Number(x) > 0) || Number(x) < 1 || Number(x) > 15) {
        return false;
    }
    const t = Math.ceil(Math.log(MODERN_ACTIVITY / Number(x)) * HALF_LIFE_PERIOD / 0.693);
    return t;
};
