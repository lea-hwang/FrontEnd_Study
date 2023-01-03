// 비구조화할당(구조분해할당)

// 배열의 선언분리, 비구조화할당
let [one, two, three, four = "four"] = ["one", "two", "tree"];
// 기본값을 four로 넣어줌
console.log(one, two, three, four);

// swap

let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a, b);

// 객체 비구조화할당

let object = {
  one_: "one",
  two_: "two",
  three_: "three",
  name: "lea"
};

// 키값을 기준으로 할당
// 변수명을 바꿀 수도 있음
let { name: Myname, one_, two_, three_, abc = "기본값" } = object;
console.log(Myname, one_, two_, three_, abc);
