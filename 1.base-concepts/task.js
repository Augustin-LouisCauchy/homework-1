"use strict" 

function solveEquation(a, b, c) {
  let arr;
   
  const dis = b**2 - 4 * a * c;
  let x2 = (-b - Math.sqrt(dis)) / (2 * a);
  let x1 = (-b + Math.sqrt(dis)) / (2 * a);
  if (dis < 0) {
    arr = [];
  } else if (dis == 0) {
    arr = [x1];
  } else {
    arr = [x1, x2];
  
  } 
  
  return arr; // array
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  
  if (!isNaN(parseInt(percent)) && parseInt(percent) >= 0) {
    percent = Number(percent);
  } else {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
  }
  console.log(typeof percent);

  if (!isNaN(parseInt(contribution)) && parseInt(contribution) >= 0) {
    contribution = Number(contribution);
  } else {
    return `Параметр "Процентная ставка" содержит неправильное значение "${contribution}"`
  }

  if (!isNaN(parseInt(amount)) && parseInt(amount) >= 0) {
    amount = Number(amount);
  } else {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
  }

  let futureTense = new Date(date);
  let futureMonth = new Date().getMonth(date);

  let percentage = percent / 100 / 12;
  //console.log(typeof percentage);

  let currentTense = new Date();
  console.log (currentTense);

  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();

  let diffYears = futureTense.getFullYear() - currentYear;
  //console.log(diffYears);
  let diffMonth = diffYears * 12 - (currentMonth + 1) + (futureMonth + 1);

  let loan = amount - contribution;
  let monthPayment = loan * (percentage + percentage / ((1 + percentage)**diffMonth - 1));
  let fullPayment = (monthPayment * diffMonth).toFixed(2);
  
  totalAmount = parseFloat(fullPayment);
  console.log(totalAmount);
  
  return totalAmount;
}

calculateTotalMortgage();
