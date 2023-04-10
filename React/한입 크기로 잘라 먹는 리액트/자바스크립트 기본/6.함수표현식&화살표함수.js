// 호이스팅
// 코드가 실행되기 전, 변수선언, 함수선인이 스코프의 최상단으로 끌어올린 것과 같은 현상
console.log(hello2()); // 함수 선언식은 호이스팅됨
// console.log(hello1()); // 함수 표현식은 호이스팅되지 않음

let hello1 = function () {
  return "안녕하세요 여러분";
}; // 함수 표현식 : 함수를 변수에 담아서 표현

function hello2() {
  return "안녕하세요 여러분";
} // 함수 선언식

const helloText = hello1();
console.log(helloText);

// 화살표 함수(함수 표현식을 간결하게 표현 가능)
let hello3 = () => "안녕하세요 여러분";
