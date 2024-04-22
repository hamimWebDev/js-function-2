function TenTimes(number) {
  const result = number * 10;
  return result;
}

function cutHalf(n) {
  const half = n / 2;
  return half;
}

const output = TenTimes(5);
const result = cutHalf(100);

function evenOdd(number) {
  if (number % 2 === 0) {
    return "Even number";
  } else if (number % 2 === 1) {
    return "Odd number";
  }
}

// console.log(output);
// console.log(result);

const res = evenOdd(12);

console.log(res);
