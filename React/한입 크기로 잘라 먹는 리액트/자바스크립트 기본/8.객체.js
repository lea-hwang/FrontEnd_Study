// 객체
// non-primitive type
// 한 번에 여러 개의 값을 저장할 수 있음

// 객체 생성자 활용
let person1 = new Object();

// 객체 리터럴 방식
let person2 = {};

// key: value 형태로 값을 넣을 수 있음
let person = {
  name: "lea", // 프로퍼티(객체의 속성)
  age: 25
};

console.log(person);

// 프로퍼티 접근
// 1. 점표기법
console.log(person.name);

// 2. 괄호 표기법
console.log(person["name"]);

console.log(getPropertyValue("name"));

function getPropertyValue(key) {
  return person[key];
}

// 객체 생성 이후 프로퍼티 생성 및 변경
const person3 = {
  name: "lea", // 멤버
  age: 25, // 멤버
  say: function () {
    // 메서드
    console.log(`안녕 나는 ${this["name"]}`);
  }
};

// 생성
person3.location = "한국";
person3["gender"] = "여성";

// 수정
person3.name = "희원";

// 삭제
delete person3.age; // 메모리는 낭비됨
person3.name = null; // 이 방법을 더 추천

// 객체는 상수로 생성하더라도, 프로퍼티를 변경할 수 있음
console.log(person3);

// 객체 내 함수(프로퍼티) 사용
person3.say();
person3["say"]();

// 존재하지 않는 프로퍼티 접근
console.log(person3.age);

// 프로퍼티 여부 확인
console.log(`name: ${"name" in person}`);
