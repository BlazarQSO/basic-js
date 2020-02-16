module.exports = function repeater(str, options) {
    let {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = options;

    if (str && typeof str !== 'string' || str === null) str = str + "";

    if (!repeatTimes) repeatTimes = 1;
    if (!separator) separator = '+';

    if (addition && typeof addition !== 'string') addition = addition + "";
    if (addition === false) addition = 'false';
    if (addition === null) addition = 'null';
    if (!addition) { addition = '' }
    if (additionRepeatTimes !== undefined && additionSeparator !== undefined) {
        addition = addition.concat(additionSeparator);
    }
    let additionSeparatorTrue = true;
    if (!additionRepeatTimes) {
        additionRepeatTimes = 1;
        additionSeparatorTrue = false;
    }
    if (additionRepeatTimes) {
        addition = addition.repeat(additionRepeatTimes);
        if (additionSeparatorTrue && additionSeparator) {
            addition = addition.substring(0, addition.length - additionSeparator.length);
        }
    }

    str = str.concat(addition);
    str = str.concat(separator);
    str = str.repeat(repeatTimes);
    str = str.substring(0, str.length - separator.length);
    return str;
};
