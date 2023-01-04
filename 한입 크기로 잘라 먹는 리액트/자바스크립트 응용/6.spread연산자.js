// spread 연산자
const cookie = {
  base: "cookie",
  madeIn: "korea"
};

const chocochipCookie = {
  ...cookie,
  toping: "chocochip"
};

const blueberryCookie = {
  ...cookie,
  toping: "blueberry"
};

const strawberryCookie = {
  ...cookie,
  toping: "strawberry"
};

console.log(chocochipCookie);
console.log(blueberryCookie);
console.log(strawberryCookie);

// 배열
const noTopingCookies = ["촉촉한 쿠키", "안촉촉한 쿠키"];
const topingCookies = ["바나나쿠키", "블루베리쿠키", "딸기쿠기", "초코칩쿠키"];

const AllCookies = [...noTopingCookies, ...topingCookies, "또다른 쿠키"];

console.log(AllCookies);
