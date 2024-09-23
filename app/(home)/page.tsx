"use client";
import { useEffect, useState } from "react";

// client component에서는 metadata를 export할 수 없음.

export default function Page() {
  const [movies, setMovies] = useState();
  const getMovies = async () => {
    const response = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );
    const json = await response.json();
    setMovies(json);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <div>{JSON.stringify(movies)} </div>;
}
