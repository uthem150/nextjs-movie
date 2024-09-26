// error component에는 use client를 추가해야 함
"use client";

// error.tsx파일을 만들면, 프로그램 전체가 먹통이 되는게 아니라, 해당 페이지만 안되도록 할 수 있음
// error파일을 페이지 옆에 만들면 됨.
// 단 해당 error파일은 movies/id에만 적용이 됨.
export default function Error() {
  return <h1>something broke</h1>;
}
