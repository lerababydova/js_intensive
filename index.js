let num1 = prompt("Введите первое число");
let num2 = prompt("Введите второе число");

if (!isNaN(num1) && !isNaN(num2)) {
  console.log(Number(num1).toString(num2));
} else {
  console.log("Некорректный ввод");
}
