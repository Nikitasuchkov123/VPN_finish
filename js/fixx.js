let fixx = [];
for (let i = 0; i < 100; i++) {
  if (i % 3 == 0) {
    fixx.push("fizz");
  } else if (i % 5 == 0) {
    fixx.push("Buzz");
  } else if (i % 15 == 0) {
    fixx.push("FizzBuzz");
  } else {
    fixx.push(i);
  }
}
console.log(fixx);
// Cделать таблицу умножения
for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    // некие полезные операции
    console.log(i * j);
  }
}
