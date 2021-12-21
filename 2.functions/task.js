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
    } if (arr[e] < min) {
      min = arr[e];
    } if (e < arr.length) {
      sum += arr[e]
    } 
  }
  
  let average = sum / arr.length;
  avg = Number(average.toFixed(2));

  return { min: min, max: max, avg: avg };
}

console.log(getArrayParams([-99, 99, 10])); 

// Задание 2


function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

worker();

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  
  for (let i = 0; i < arrOfArr.length; i++) {
    console.log(func(arrOfArr[i]));
    
    if (func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i]);
    }
  }
  return max;
}

makeWork();

// Задание 3
function worker2(arr) {
  let max = -Infinity;
  let min = Infinity;

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] < min) {
      min = arr[j];
    }
    if (arr[j] > max) {
      max = arr[j];
    }
  }
  return Math.abs(max - min);
}
worker2();
