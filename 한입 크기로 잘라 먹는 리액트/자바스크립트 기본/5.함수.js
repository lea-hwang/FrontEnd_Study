// 함수
// 반복되는 코드를 효율적으로 줄일 수 있음.
// 직사각형의 면적을 계산

let width = 10;
let height = 20;
let area1 = width * height;
console.log("area1: ", area1);

// 함수로 표현
function getArea(width, height) {
  // console.log(width * height);
  return width * height; // 값을 반환할 수 있음
} // 함수 선언식, 함수 선언 방식의 함수 생성

// 함수 호출
let area2 = getArea(10, 20); // 매개 변수를 넣을 수 있음
console.log("area2: ", area2);

// 지역변수
// 함수 내부에서는 선언된 변수는 함수 외부에서 접근할 수 없음
// 전역변수
// 함수 외부에서 선언된 변수는 함수 내부에서 접근할 수 있음
