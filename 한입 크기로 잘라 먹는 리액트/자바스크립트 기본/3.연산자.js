// 연산자

// 대입 연산자
// 변수에 값을 넣음
let a = 1;
let b = 2;
let c = '1';
let d = '2';

// 산술 연산자
// 사칙연산을 할 수 있음
console.log(a + b);  // 3
console.log(a - b);  // -1
console.log(a * b);  // 2
console.log(a / b);  // 0.5

// 연결 연산자
// 문자열 두 개를 이을 수 있음.
console.log(c + d);


// 복합 연산자
// a = a + 10 을 줄여 a += 10으로 작성할 수 있음
a += 10
console.log(a);

// 증감 연산자
// ++를 앞에 붙이면 먼저 +1, 뒤에 붙이면 나중에 +1
a = 10;
a++;
console.log(a);   // 11
console.log(a--); // 11
console.log(a);   // 10

// 논리 연산자
// 참인지 거짓인지 판별
// ! NOT
// && AND
// || OR
console.log(!true); // false
console.log(true && true); // true
console.log(true || false); // true

// 비교 연산자
// == 값만 비교
// === 값과 타입을 같이 비교
let compareA = 1 == "1";
console.log(compareA); // true

let compareB = 1 === "1";
console.log(compareB); // false

let compareC = 1 <= 2;
console.log(compareC); // true

// typeof 연산자
// 변수의 타입을 알 수 있음
console.log(typeof a); // number

// null 병합 연산자
// 왼쪽 피연산자의 값이 null이나 undefined일 경우, 오른쪽 피연산자를 반환.
// 그렇지 않을 경우 왼쪽 피연산자 값을 반환
let k;
k = k ?? 10; 
console.log(k)