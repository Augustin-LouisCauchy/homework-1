"use strict"

// Задание 1
function getArrayParams(arr) {
  let avg;
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let e = 0; e < arr.length; e++) {
    if (arr[e] > max) {
      max = arr[e];
    } else if (arr[e] < min) {
      min = arr[e];
    } else if (e < arr.length) {
      sum += arr[e]
    } 
  }
  
  let avg2 = sum / arr.length;
  avg = Number(avg2);
  avg.toFixed(2);

  return { min: min, max: max, avg: avg };
}

console.log(getArrayParams([-99, 99, 10])); 

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
