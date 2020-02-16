module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error();
    }
    const res = []
    for (let i = 0; i < arr.length; i += 1) {

        switch(arr[i]) {
            case '--double-next': {
                if (i + 1 < arr.length) {
                    res.push(arr[i + 1]);
                }
                break;
            }
            case '--double-prev': {
                if (i - 1 >= 0) {
                    res.push(arr[i - 1]);
                }
                break;
            }
            case '--discard-prev': {
                if (i - 1 >= 0) {
                    res.pop();
                }
                break;
            }
            case '--discard-next': {
                if (i + 1 < arr.length) {
                    i += 1;
                }
                break;
            }
            default: {
                res.push(arr[i]);
            }

        }
    }
    return res;
};
