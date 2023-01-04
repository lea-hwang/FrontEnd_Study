// Promise
// 콜백지옥을 해결할 수 있음

// 2초 뒤에 전달받은 값이 양수인지 음수인지 판단하는 함수
function isPositive(num, resolve, reject) {
  setTimeout(() => {
    if (typeof num === "number") {
      // 비동기 작업 성공(resolve)
      resolve(num >= 0 ? "양수" : "음수");
    } else {
      // 실패(reject)
      reject("주어진 값이 숫자형 값이 아닙니다.");
    }
  }, 2000);
}

// callback 함수를 이용해서 비동기 처리
isPositive(
  10,
  (res) => {
    console.log("성공적으로 실행됨 :", res);
  },
  (err) => {
    console.log("실패함 :", err);
  }
);

// promise를 이용해서 비동기 처리
function isPositiveP(num) {
  // executor: 실행자.
  const executor = (resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        // 비동기 작업 성공(resolve)
        resolve(num >= 0 ? "양수" : "음수");
      } else {
        // 실패(reject)
        reject("주어진 값이 숫자형 값이 아닙니다.");
      }
    }, 2000);
  };

  // 2. executor 실행
  const asyncTask = new Promise(executor);
  return asyncTask;
}

// 1. isPositiveP가 실행됨
const res = isPositiveP([]);
res
  .then((res) => {
    // resolve 되었을 때 결과값을 res로 받을 수 있음
    console.log("작업 성공:", res);
  })
  .catch((err) => {
    // reject 되었을 때 결과값을 err로 받을 수 있음
    console.log("작업 실패:", err);
  });

// promise로 콜백 지옥 탈출하기
function taskA(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 3000);
  });
}

function taskB(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 3000);
  });
}

function taskC(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a - 1;
      resolve(res);
    }, 3000);
  });
}

// "then" chaining
taskA(5, 1)
  .then((res_a) => {
    console.log("A result:", res_a);
    // 반환값도 promise가 되기 때문에 .then으로 받을 수 있음
    return taskB(res_a);
  })
  .then((res_b) => {
    console.log("B result:", res_b);
    return taskC(res_b);
  })
  .then((res_c) => {
    console.log("C result:", res_c);
  });
