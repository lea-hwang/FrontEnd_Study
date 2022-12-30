// 반복문
// 특정 명령을 반복해서 수행할 수 있도록 도와주는 문법

console.log("lea");
console.log("lea");
console.log("lea");
console.log("lea");
console.log("lea");

// for 반복문
//     초기식     조건식  연산
// 반복문 시작 전, 초기값 설정
// 매 반복문마다 조건식을 만족시켜야함
// 매 반복문마다 연산이 수행됨
for (let i = 1; i <= 5; i++) {
  // 반복 수행할 명령
  console.log("lea");
}

// 배열 순회(인덱스 접근)
const arr = ["1", "2", "3"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 객체 순회
const person = {
  name: "희원",
  age: 25
};

// Object.keys
// 객체의 key 값들을 배열로 반환
const keys = Object.keys(person);
console.log(keys);

// key와 value 접근
for (let i = 0; i < keys.length; i++) {
  let curKey = keys[i];
  console.log(keys[i]);
  console.log(person[curKey]);
}

// Object.values
// 개체의 value 값들을 배열로 반환
const values = Object.values(person);
console.log(values);

// value 접근
for (let i = 0; i < values.length; i++) {
  console.log(values[i]);
}
