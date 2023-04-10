// 동기&비동기

// 동기
// 순서대로 실행하는 것
// 자바스크립트의 싱글 스레드 실행 방식에서,
// 자바스크립트는 코드가 작성된 순서대로 작업을 처리함
// task A가 끝나야 task B가 실행됨
// 블로킹 방식 -> 하나의 작업이 실행될 때 다른 작업이 실행되지 못하는 것
// 동기처리 방식은 하나의 작업이 오래 걸릴 때, 그 작업에 끝날때까지 기다려야함.(시간이 너무 많이 걸림)
// 멀티 쓰레드 thread를 여러 개를 사용하여 작업을 분배. -> 자바스크립트는 싱글쓰레드임.(불가능)

// 비동기
// 순서대로 실행하지 않는 것
// 논 블로킹 방식: 하나의 작업을 하는 동안 다른 작업도 실행됨.
// 작업들이 끝난 시점을 어떻게 알 수 있을까? -> 콜백함수를 같이 전달하여 작업이 끝났을 때 콜백함수가 실행됨.

// 동기적 방식
// taskA가 먼저 실행되고 그다음이 실행됨
function task1() {
  console.log("작업 끝");
}

task1();
console.log("코드 끝");

// 비동기 방식
function taskA(a, b, cb) {
  // 인자로 콜백함수와, delayTime값을 넣어줌.
  // 단위가 ms이기 때문에 1000ms === 1s
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000);
}

// 비동기 처리의 결과값을 사용해야할 경우, 콜백함수를 전달하여 해당 값을 사용할 수 있다.
taskA(3, 4, (res) => {
  console.log("A task result: ", res);
});
console.log("코드 끝");

function taskB(a, cb) {
  setTimeout(() => {
    const result = a * 2;
    cb(result);
  }, 1000);
}

taskB(2, (res) => {
  console.log("B task result: ", res);
});

function taskC(a, cb) {
  setTimeout(() => {
    const res = a * -1;
    cb(res);
  }, 2000);
}

taskC(14, (res) => {
  console.log("C task result: ", res);
});


// Callback Hell. 콜백 지옥. 가독성이 떨어짐. -> promise로 해결할 수 있음
taskA(4, 5, (a_res) => {
  console.log("A result :", a_res); // A result : 9
  taskB(a_res, (b_res) => {
    console.log("B result:", b_res); // B result: 18
    taskC(b_res, (c_res) => {
      console.log("C result:", c_res); // C result: -18
    });
  });
});
