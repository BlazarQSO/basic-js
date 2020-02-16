module.exports = class DepthCalculator {
    calculateDepth(arr, count = 1) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                count += this.calculateDepth([].concat(...arr), count);
                break;
            }
        }
        return count;
    }
};
