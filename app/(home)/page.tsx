export const metadata = {
  title: "Home",
};

// client component에서는 metadata를 export할 수 없음.

// React는 useState, setMovies, loading상태 관리 등을 모두 해줘야 함
// nextJS는 서버 컴포넌트에서, 할 수 있으므로 -> useEffect, useState를 쓰지 않아도 됨 + 로딩상태 구현 안해도 됨
// 프레임워크가 대신 해줌 -> 모든 것은 서버 컴포넌트로부터 비롯됨 (api도 안전하게 숨길 수 있게 됨)
// useState를 쓰면 metadata도 쓸 수 없는데, 서버 컴포넌트에서 하면 됨.

// NextJS와 서버컴포넌트를 이용하면 React App <-----> API <-----> DB 흐름이 아니라,
// API가 필요가 없게 됨.

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // 이렇게 fetch해오는 단점은,
  // 백엔드에서 fetch되므로, 사용자를 위한 UI가 없다는 점임
  // fetch되기 전에는 return부분이 render되지 않음.
  await new Promise((resolve) => setTimeout(resolve, 5000));

  // const response = await fetch(URL);
  // const json = await response.json();
  // return json;
  return fetch(URL).then((response) => response.json());
}

// await을 사용하기 위해 async로 변경
export default async function HomePage() {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)} </div>;
}
