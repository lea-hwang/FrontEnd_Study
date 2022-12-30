// 배열내장함수
const arr = [1, 2, 3, 4];

// forEach
// 배열의 각각의 요소에 접근
arr.forEach((elm) => console.log(elm * 2));

// map
// 배열의 모든 요소에 접근해서 특정 연산을 수행하고 다시 새로운 배열을 반환
const newArr = arr.map((elm) => elm * 2);
console.log(newArr);

// includes
// 배열이 특정값을 포함하고 있는지 여부 반환
const number = 3;
console.log(arr.includes(number));

// indexOf
// 배열 내 특정값의 위치를 반환
// 인자가 있으면 인덱스를 반환, 없으면 -1 반환
console.log(arr.indexOf(number)); // 2
console.log(arr.indexOf(0)); // -1

// findIndex
// 콜백함수를 넣어 가장 먼저 조건을 만족하는 값의 인덱스를 반환
// 배열 내 객체의 값을 찾고 싶을 때 사용
const colorArr = [
  { color: "red" },
  { color: "green" },
  { color: "blue" },
  { color: "purple" }
];

console.log(colorArr.findIndex((elm) => elm.color === "blue")); // 2

// find
// 콜백함수를 넣어 가장 먼저 조건을 만족하는 요소를 반환
console.log(colorArr.find((elm) => elm.color === "blue")); // {color:"blue"}

// filter
// 배열 내 특정 조건을 만족하는 모든 요소를 배열로 반환
console.log(colorArr.filter((elm) => elm.color === "blue")); // [{color:"blue"}]

// slice
// 배열을 자른 새로운 배열을 반환
console.log(colorArr.slice(0, 2)); // [{color:"red"}, color:"green"]

// concat
// 배열 붙이기
const colorArr2 = [{ color: "pink" }];
console.log(colorArr.concat(colorArr2));

// sort
// 원본 배열 정렬(문자로 보고 사전순으로 정렬)
let letterArr = ["아", "가", "하"];
letterArr.sort();
console.log(letterArr);

let numArr = [1, 7, 5, 4, 9, 30, 40];
numArr.sort();
console.log(numArr); // [1, 30, 4, 40, 5, 7, 9]

// 오름차순으로 정렬하기 위해 비교 함수 제작
const compare = (a, b) => {
  if (a > b) {
    return 1; // 더 뒤에 있다
  } else if (a < b) {
    return -1; // 더 앞에 있다
  } else {
    return 0; // 자리를 안바꾼다
  }
};
numArr.sort(compare);
console.log(numArr); // [1, 4, 5, 7, 9, 30, 40]

// join
// 모든 요소를 문자열로 합쳐서 반환
const hello = ["안녕하세요", "제 이름은", "황희원입니다"];
console.log(hello.join(" ")); // 기본 구분자는 쉼표
