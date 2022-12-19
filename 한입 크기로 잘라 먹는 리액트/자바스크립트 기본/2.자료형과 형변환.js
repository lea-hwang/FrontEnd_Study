// number(숫자형 타입)
let age = 25;         // 정수
let tall = 160.4;     // 실수
let inf = Infinity;   // 무한대
let nan = NaN;        // not a number

console.log(age + tall);


// String(문자형 타입)
let name = "lea";
let name2 = '황희원';
let name3 = `lea ${name2}`;

console.log(name3);

// Boolean(불린형 타입)
let isGood = true;
console.log(isGood);

// Null(널 타입)
  // 의도적으로 이 값을 아무 값도 가지고 있지 않다라는 것을 의미
let a = null;
console.log(a);

// Undefined
// 아무 값도 할당하지 않았을 경우
let b;
console.log(b);


// 묵시적 형변환
// 자바스크립트가 알아서 형을 바꿔줌
let k = 12;
let m = "2";
console.log(k * m); // 24 
console.log(k + m); // 122


// 명시적 형변환
// 프로그래머가 의도적으로 형변환하는 것
console.log(k + parseInt(m)); // 14