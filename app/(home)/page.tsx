"use client";
import { useEffect, useState } from "react";

// client component에서는 metadata를 export할 수 없음.


// React는 useState, setMovies, loading상태 관리 등을 모두 해줘야 함
// nextJS는 서버 컴포넌트에서, 할 수 있으므로 -> useEffect, useState를 쓰지 않아도 됨 + 로딩상태 구현 안해도 됨
// 프레임워크가 대신 해줌 -> 모든 것은 서버 컴포넌트로부터 비롯됨 (api도 안전하게 숨길 수 있게 됨)
// useState를 쓰면 metadata도 쓸 수 없는데, 서버 컴포넌트에서 하면 됨.

// NextJS와 서버컴포넌트를 이용하면 React App <-----> API <-----> DB 흐름이 아니라,
// API가 필요가 없게 됨.

export default function Page() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    const response = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );
    const json = await response.json();
    setMovies(json);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <div>{isLoading ? "Loading" : JSON.stringify(movies)} </div>;
}
