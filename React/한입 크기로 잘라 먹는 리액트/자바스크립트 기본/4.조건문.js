// 조건문
// if
// 조건을 만족할 때, if 문 안이 실행됨
// 조건을 만족하지 않을 때, else 실행됨
let a = 3;

if (a >= 7) {
  console.log("7이상입니다.");
} else if (a >= 5) {
  console.log("5이상입니다.");
} else {
  console.log("5미만입니다.");
}

// switch 문
// 각 값에 해당하는 구문이 실행됨
// break로 끊어주어야 각각의 코드만 실행됨
let country = "ko";

switch (country) {
  case "ko":
    console.log("한국");
    break;
  case "cn":
    console.log("중국");
    break;
  case "jp":
    console.log("일본");
    break;
  default:
    console.log("미 분류");
    break;
}
