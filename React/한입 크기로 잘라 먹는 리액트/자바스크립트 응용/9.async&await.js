// async & await

function hello() {
  return "hello";
}

async function helloAsync() {
  return "hello Async";
} // Promise 객체임.

console.log(hello());
console.log(helloAsync()); // Promise 객체
helloAsync().then((res) => console.log(res)); // return 한 값이 res에 담기게 됨

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function helloAsync2() {
  // // 3초뒤 hello Async return
  // return delay(3000).then(() => {
  //   return "hello Async"
  // })

  // await에서는 모두 동기적으로 처리되고 그 이후 비동기적으로 처리
  // async 내에서만 사용가능
  await delay(3000);
  return "hello Async2";
}


function main() {
  helloAsync2().then((res) => {
    console.log(res);
  });
}

main();
