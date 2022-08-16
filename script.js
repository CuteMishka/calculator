var operation
var resultat
function func() {
  var num1 = Number(document.getElementById("number1").value);
  var num2 = Number(document.getElementById("number2").value);
  switch (operation) {
  case "+":
    alert(num1 + num2); 
    break;
  case "-":
    alert(num1 - num2);
    break;
  case "/":
    alert(num1 / num2);
    break;
  case "*":
    alert(num1 * num2);
    break;
}
}
