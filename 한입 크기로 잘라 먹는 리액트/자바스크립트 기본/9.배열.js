// 배열 Array
// 순서있는 자료형의 집합

// 생성자 호출
let arr1 = new Array();

// 배열 리터럴
let arr2 = [];

// 어떤 자료형을 들어가도 됨
arr2 = [1, "2", null, undefined, function () {}, []];
console.log(arr2);

// 인덱스를 통해 요소에 접근 가능
let arr = [1, 2, 3, 4, 5];
// 0부터 접근 가능
console.log(arr[0]); // 1
console.log(arr[2]); // 3

// 배열의 가장 마지막에 추가할 수 있음.
arr.push(6);
console.log(arr);

// 배열의 길이
// 프로퍼티처럼 접근 가능
console.log(arr.length);
