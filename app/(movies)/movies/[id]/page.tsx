// [] <- 대괄호 폴더를 만들면, 동적 라우팅을 할 수 있음.
// movies/1212

// props를 안에 넣으면, 두 종류의 props를 얻을 수 있음
// http://localhost:3000/movies/111?region=kr&page=2
// -> { params: { id: '111' }, searchParams: { region: 'kr', page: '2' } }

export default function MovieDetail(props) {
  console.log(props);
  return <h1>Movie</h1>;
}
