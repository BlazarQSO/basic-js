module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date)) {
    throw new Error();
  }
  if (date.hasOwnProperty('getMonth')) {
    throw new Error();
  }

  const month = date.getMonth();

  if (month < 5 && month > 1) {
    return 'spring';
  } else if (month > 4 && month < 8) {
    return 'summer';
  } else if (month > 7 && month < 11) {
    return 'fall';
  } else {
    return 'winter';
  }
};
