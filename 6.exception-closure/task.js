function parseCount (parseNumber) {
   const number = parseInt(parseNumber);
  if (isNaN(number)) {
    throw new Error("Невалидное значение");
    
  }
  return number;
}



function validateCount (parseValue) {
    try {
        
        return parseCount(parseValue)
    }
    catch (error) {
        if (error.name == "Error") {
            return error;
        }
        else {
            throw error;
        }
    }

} 

