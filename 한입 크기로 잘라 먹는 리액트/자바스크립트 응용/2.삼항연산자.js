// 삼항연산자
let a = 3;
if (a >= 0) {
  console.log("양수");
} else {
  console.log("음수");
}

console.log(a >= 0 ? "양수" : "음수");
a >= 0 ? console.log("양수") : console.log("음수");

let b = [];

b.length ? console.log("안빈배열") : console.log("빈배열");

const arrayStatus = b.length ? "안빈배열" : "빈배열";
console.log(arrayStatus);

// Truthy & Falsy

let c; // undefined

const result = c ? true : false;
console.log(result);

// 삼항연산자 중첩

// 학점계산 프로그램

// 90점 이상일 경우
const score = 100;
const letter = score >= 90 ? "A+" : score >= 50 ? "B+" : "F";
console.log(letter);

if (score >= 90) {
  console.log("A+");
} else if (score >= 50) {
  console.log("B+");
} else {
  console.log("F");
}
