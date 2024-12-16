// question1
// How much time taken to run the code
// for suppose below code.

function count() {
  let i = 0;
  while (i < 10000) {
    i++;
  }
}
// const before = new Date().getTime();
// count();
// const after = new Date().getTime();
// console.log(after - before);

console.time("timer");
count();
console.timeLog("timer");

// Question2
// based on concatenation
console.log("2" + 1 + 1); // 211
console.log(2 + 1 + "1"); //31

// question3 based on pre inc and post inc
let n = 20;
console.log(n + 1); // 21
console.log(++n); // 21
console.log(n++); //21
console.log(n); //22

let num = 1;
let sum = ++num + num++;
console.log(sum);

console.log("======================");

let arr = [-12, 8, -7, 6, 12, -9, 14];
let res = arr.reduce(
  (acc, cur) => {
    if (cur >= 0) {
      num++;
      sum = sum + cur;
      return [sum, num];
    }
  },
  [(sum = 0), (num = 0)]
);
console.log(res[0] / res[1]);
//96 62 61 98 2 -41 43 65 -20 28 -6 98 81 93 71 7 -100 67 87 32 36 66 57 -90 -19 70 10 -36 -64 26 26 -25 66 50 62 93 13 -90 -42 8 68 19 -22 -5 7 48 -38 -72

let x = [];
x[5] = 10;
console.log(x);
x.forEach((y) => console.log("hello"));
for (let ele of x) {
  console.log(ele);
}
x.map((ele) => console.log(ele));
x.fill(12, 0, 4);
console.log(x);
