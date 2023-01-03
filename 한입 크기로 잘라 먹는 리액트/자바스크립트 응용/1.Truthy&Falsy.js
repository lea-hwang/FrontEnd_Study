// TRUTHY & FALSY
let truthy;
let falsy;

falsy = ""; // FALSE
truthy = "string"; // TRUE

if (truthy) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}

// TRUE으로 인식하는 값들
truthy = [];
truthy = {};
truthy = 42;
truthy = "0";
truthy = "false";
truthy = Infinity;

// FALSE으로 인식하는 값들
falsy = null;
falsy = undefined;
falsy = 0;
falsy = -0;
falsy = NaN;
falsy = "";

const getName = (person) => {
  if (!person) {
    return "객체가 아닙니다.";
  }

  return person.name;
};

let person = {
  name: "lea hwang"
};

// const name = getName(person);
const name = getName(undefined);
console.log(name);
