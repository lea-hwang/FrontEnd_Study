// 변수(let)
// 변수명 규칙
// 1. 변수에는 기호를 사용할 수 없다. (_$ 제외)
// 2. 반드시 숫자가 아닌 문자로 시작해야한다.
// 3. 예약어로 변수를 만들 수 없다. (if, for ...)

let age = 25;
console.log(age);

age = 30;
console.log(age);

// var는 재선언이 가능함 -> 문제가 발생할 가능성이 높음.

var height = 160;
console.log(height);

var height = 180;
console.log(height);


// 상수(const)

const name = '희원';
name = '예지'; // -> TypeError: "name is read-only"