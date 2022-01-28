// TASK 1______________________________________________________

function parseCount(parseNumber) {
  const number = Number.parseInt(parseNumber);
  if (isNaN(number)) {
    throw new Error("Невалидное значение");
  }
  return number;
}

function validateCount(parseValue) {
  try {
    return parseCount(parseValue);
  } catch (error) {
    if (error.name == "Error") {
      return error;
    } else {
      throw error;
    }
  }
}

// TASK 2______________________________________________________

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (a + b < c || a + c < b || b + c < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    let semiPerimeter = this.getPerimeter() / 2;
    let squareCalc = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - this.a) *
        (semiPerimeter - this.b) *
        (semiPerimeter - this.c)
    );
    let square = squareCalc.toFixed(3);
    return parseFloat(square);
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (err) {
    return {
      getPerimeter() {
        return "Ошибка! Треугольник не существует";
      },
      getArea() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}
