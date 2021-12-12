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
  //Проверка на корректность введения данных
  if (percent > 0) {
    percent = + percent;
  } else if (percent != 0 || percent == 0) {
    return (`Параметр "Процентная ставка" содержит неправильное значение ${percent}`)
  }
  if (contribution > 0) {
    contribution = + contribution
  } else if (contribution != 0 ) {
    return (`Параметр "Первоначальный взнос" содержит неправильное значение ${contribution}`)
  }
  if (amount > 0) {
    amount = + amount
  } else if (amount != 0 ) {
    return (`Параметр "Стоимость" содержит неправильное значение ${amount}`)
  }

  let currentDate  = new Date();  
   date = new Date(window.date.value); 
   let payPeriod = 0 - ((currentDate.getFullYear() -  date.getFullYear()) * 12) - (currentDate.getMonth() - date.getMonth());
   date = payPeriod; 
   let returnAmount = amount - contribution  
   percent = percent / 1200; 
   let monthlyPay = amount*(percent+percent/(((1+percent)**date)-1)); 
   totalAmount = monthlyPay * date;   
   console.log(totalAmount.toFixed(2));
   return totalAmount.toFixed(2); 
}

calculateTotalMortgage();
