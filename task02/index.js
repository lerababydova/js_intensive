function task02() {
  const num1 = prompt("введите первое число");
  if (isNaN(num1)) {
    console.log("неккоректный ввод");
    return;
  }
  const num2 = prompt("введите второе число");
  if (isNaN(num2)) {
    console.log("неккоректный ввод");
    return;
  }
  const n1 = Number(num1);
  const n2 = Number(num2);
  console.log(`Ответ ${n1 + n2}, ${num1 / num2}`);
}

task02();
