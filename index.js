const add = function(numA, numB) {
    let total = (numA + numB);
    console.log(total);
      return total;
  };
  
  const subtract = function(numA, numB) {
      let subtractedTotal = (numA - numB);
      console.log(subtractedTotal);
      return (subtractedTotal);
  };
  
  
  const multiply = function(numA, numB) {
    let result = (numA * numB);
    console.log(result);
    return result;
  };

  const divide = function(numA, numB) {
    let dividend = (numA / numB);
    console.log(dividend);
    return dividend;
  };

  const operate = function(operator, numA, numB) {
    let operation = 0;
    if (operator === '+') {
      operation = add(numA, numB);
      console.log(operation);
      return;
    } else if (operator === '-') {
      operation = subtract(numA, numB);
      console.log(operation);
      return;
    } else if (operator === '*') {
      operation = multiply(numA, numB);
      console.log(operation);
      return;
    } else if (operator === '/') {
      if (numA && numB != 0) {
        operation = divide(numA, numB);
        console.log(operation);
        return;
      }
        else alert('Cannot divide by zero');
      }
  };