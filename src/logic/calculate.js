import Big from "big.js";

function isNumber(buttonName) {
  return /[0-9]+/.test(buttonName);
}

function opertate(numberOne, numberTwo, operation) {
  const number1 = Big(
    numberOne || (operation === "X" || operation === "÷" ? 1 : 0)
  );
  const number2 = Big(
    numberTwo || (operation === "X" || operation === "÷" ? 1 : 0)
  );
  switch (operation) {
    case "+":
      return number1.plus(number2);
    case "-":
      return number1.minus(number2);
    case "X":
      return number1.times(number2);
    case "÷":
      if (!(number2 === 0)) {
        return number1.div(number2);
      }
      return 0;
    default:
      return 0;
  }
}

export default function Calculate(object, buttonName) {
  // console.log(object);
  if (buttonName === "AC") {
    return {
      total: null,
      next: null,
      operation: null
    };
  }

  if (isNumber(buttonName)) {
    if (object.operation) {
      if (object.next) {
        return {
          ...object,
          next: object.next + buttonName
        };
      }
      return {
        ...object,
        next: buttonName
      };
    }
    if (object.next) {
      return {
        ...object,
        total: null,
        next: object.next === 0 ? buttonName : object.next + buttonName
      };
    }
    return {
      ...object,
      next: buttonName
    };
  }

  if (buttonName === "+/-") {
    if (object.next) {
      return {
        ...object,
        next: (-1 * parseFloat(object.next)).toString()
      };
    }
    if (object.total) {
      return {
        ...object,
        next: (-1 * parseFloat(object.total)).toString()
      };
    }
  }

  if (buttonName === "=") {
    if (object.total && object.next) {
      return {
        total: opertate(object.total, object.next, object.operation).toString(),
        next: null,
        operation: null
      };
    }
    return object;
  }

  if (buttonName === ".") {
    if (object.next) {
      if (!object.next.includes(".")) {
        return {
          ...object,
          next: object.next + "."
        };
      }
    }
    return {
      ...object,
      next: "0."
    };
  }

  if (object.operation) {
    return {
      total: opertate(object.total, object.next, object.operation).toString(),
      next: null,
      operation: buttonName
    };
  }

  if (!object.next) {
    return {
      ...object,
      operation: buttonName
    };
  }

  return {
    total: object.next,
    next: null,
    operation: buttonName
  };
}
