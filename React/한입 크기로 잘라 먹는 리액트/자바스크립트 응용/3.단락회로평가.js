// 단락 회로 평가
// 뒤에 있는 피연산자의 부호를 확인할 필요 없이 평가가 끝나버림

// 논리연산자
console.log(false && true); // 앞이 false이면 무조건 false
console.log(true || false); // 앞이 true이면 무조건 true
console.log(!true);

const getName = (person) => {
  // person이 undefined인 경우, false
  const name = person && person.name;
  // name이 있을 때만 name을 return
  return name || "객체가 아닙니다.";
};

let person;

console.log(getName(person));
