function isKoreanFood(food) {
  if (["불고기", "비빔밥", "떡볶이"].includes(food)) {
    return true;
  } else {
    return false;
  }
}

console.log(isKoreanFood("파스타"));

const meal = {
  한식: "불고기",
  중식: "멘보샤",
  일식: "초밥"
};
const getMeal = (mealType) => {
  return meal[mealType] || "굶기";
};

console.log(getMeal("한식"));
console.log(getMeal());
