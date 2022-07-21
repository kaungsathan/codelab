let btn = document.getElementById("btn");
let result = document.getElementById("result");
let final_result;
let nOneError = document.getElementById("nOneError");
let nTwoError = document.getElementById("nTwoError");
let operatorError = document.getElementById("operatorError");
let nOneStatus,
  nTwoStatus,
  operatorStatus = true;

nOneError.style.display = "none";
nTwoError.style.display = "none";
operatorError.style.display = "none";

btn.addEventListener("click", function () {
  let num1 = document.getElementById("nOne");
  let num2 = document.getElementById("nTwo");
  let operator = document.getElementById("operator");

  check(num1, num2, operator);

  if (nOneStatus == true && nTwoStatus == true && operatorStatus == true) {
    num1 = parseInt(num1.value);
    num2 = parseInt(num2.value);

    switch (operator.value) {
      case "add":
        final_result = num1 + num2;
        break;

      case "subtract":
        final_result = num1 - num2;
        break;

      case "multiply":
        final_result = num1 * num2;
        break;

      case "divide":
        final_result = num1 / num2;
        break;
    }
    result.innerHTML = final_result;
  }
});

function check(num1, num2, operator) {
  if (num1.value == "" || num1.value == null || num1.value == undefined) {
    nOneError.style.display = "block";
    nOneStatus = false;
  } else {
    nOneError.style.display = "none";
    nOneStatus = true;
  }

  if (num2.value == "" || num2.value == null || num2.value == undefined) {
    nTwoError.style.display = "block";
    nTwoStatus = false;
  } else {
    nTwoError.style.display = "none";
    nTwoStatus = true;
  }

  if (operator.value == "empty") {
    operatorError.style.display = "block";
    operatorStatus = false;
  } else {
    operatorError.style.display = "none";
    operatorStatus = true;
  }
}
