// API 호출하기
// API

// jsonplaceholder(open API)
// https://jsonplaceholder.typicode.com/

// 데이터 받아오기
async function getData() {
  let rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  let jsonResponse = await rawResponse.json();
  console.log(jsonResponse);
}

getData();
