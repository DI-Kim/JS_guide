const initialResult = 0;
let currentResult = initialResult;

currentResult = ((currentResult + 10) * 3) / 2 - 1;

// quotes
// let calculationDescription = "((" + initialResult + " + 10) * 3) / 2 - 1";
// template literal (using backtick)
let calculationDescription = `(( ${initialResult} + 10) * 3) / 2 - 1`;

let errorMessage = "An error\nocurred!"; // with using css [white-space: pre;]

outputResult(currentResult, calculationDescription);
