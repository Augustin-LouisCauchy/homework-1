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
