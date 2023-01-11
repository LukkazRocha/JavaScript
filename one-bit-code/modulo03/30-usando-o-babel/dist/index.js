'use strict';

var average = function average() {
  for (
    var _len = arguments.length, numbers = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    numbers[_key] = arguments[_key];
  }
  var sum = numbers.reduce(function (accum, num) {
    return accum + num;
  }, 0);
  return sum / numbers.length;
};
console.log('M\xE9dia Aritm\xE9tica Simples: '.concat(average(3, 6, 10, 9)));
var weightedAverage = function weightedAverage() {
  for (
    var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0;
    _key2 < _len2;
    _key2++
  ) {
    entries[_key2] = arguments[_key2];
  }
  var sum = entries.reduce(function (accum, _ref) {
    var number = _ref.number,
      weight = _ref.weight;
    return accum + number * (weight !== null && weight !== void 0 ? weight : 1);
  }, 0);
  var weightSum = entries.reduce(function (accum, entry) {
    var _entry$weight;
    return (
      accum +
      ((_entry$weight = entry.weight) !== null && _entry$weight !== void 0
        ? _entry$weight
        : 1)
    );
  }, 0);
  return sum / weightSum;
};
console.log(
  'M\xE9dia Ponderada: '.concat(
    weightedAverage(
      {
        number: 9,
        weight: 3
      },
      {
        number: 7
      },
      {
        number: 10,
        weight: 1
      }
    )
  )
);
