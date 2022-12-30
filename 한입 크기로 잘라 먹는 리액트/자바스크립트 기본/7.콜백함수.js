// 콜백 함수
// 함수의 매개변수에 함수를 넘겨준 것을 의미

function checkMood(mood, goodCallback, badCallback) {
  if (mood === "good") {
    // 기분 좋을 때 하는 동작
    goodCallback();
  } else {
    // 기분 안좋을 때 하는 동작
    badCallback();
  }
}

function cry() {
  console.log("ACTION :: CRY");
}

function sing() {
  console.log("ACTION :: SING");
}

function dance() {
  console.log("ACTION :: DANCE");
}

checkMood("good", sing, cry);
