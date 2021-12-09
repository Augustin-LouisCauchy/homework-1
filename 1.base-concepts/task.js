function solveEquation(a, b, c) {
  let arr;
   
  const dis = b**2 - 4 * a * c;
  let x2 = (-b - Math.sqrt(arr)) / (2 * a);
  let x1 = (-b + Math.sqrt(arr)) / (2 * a);
  if (dis < 0) {
    arr = [];
  } else if (dis == 0) {
    arr = [x1];
  } else {
    arr = [x1, x2];
  
  } 
  
  /*let arr = b**2 - 4 * a * c;
  let dis = []
  let x2 = (-b - Math.sqrt(arr)) / (2 * a);
  let x1 = (-b + Math.sqrt(arr)) / (2 * a);
  let x = -b / (2 * a);
  if (arr > 0) {
    console.log(`Дискриминант равен: ${dis.push(x1)}`);
    console.log(`Дискриминант равен: ${dis.push(x2)}`);
  } else if (arr == 0) {
    console.log(`Дискриминант равен: ${dis.push(x)}`);
  } else {
    console.log(`Корней не найдено ${dis}`);
  } */

  return arr; // array
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь
  //НЕМНОГО НЕ УСПЕВАЮ СО ВТОРОЙ ЗАДАЧЕЙ
  return totalAmount;
}
