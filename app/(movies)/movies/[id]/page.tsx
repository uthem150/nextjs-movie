// [] <- 대괄호 폴더를 만들면, 동적 라우팅을 할 수 있음.
// movies/1212

import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

// props를 안에 넣으면, 두 종류의 props를 얻을 수 있음
// http://localhost:3000/movies/111?region=kr&page=2
// -> { params: { id: '111' }, searchParams: { region: 'kr', page: '2' } }

// params: { id }는 props의 params 객체에서 id 속성을 추출하는 방식
export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  // http://localhost:3000/movies/111
  // Movie 111이 화면에 나오게 됨

  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>

      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
