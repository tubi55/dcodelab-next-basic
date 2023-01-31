import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

/*
  ---None Pre-rendering (일반 React작업방식)---
  기존 리액트의 CSR방식에서는 일단 빈 html파일이 로드되고 이어 리액트 자바스크립트 파일이 구동되어야 빈 파일에 데이터가 들어가는 상태 (SEO 안좋음)

  ---Pre-rendering (Next.js 작업방식)---
  Next는 초기에는 SSR방식으로 서버단에서 미리 만들어진 page폴더안의 정적인 컨텐츠를 자동으로 완성된 상태에서 Initail loading 처리 (SEO에 좋음)
  이후 리액트 컴포넌트가 로드완료되면 static한 페에지에 기능을 결합시켜 동적으로 처리
  SSG타입과 SSR 타입의 Pre-render방식 차이
  SSG는 빌드시 pre-render (자주 바뀌지 않는 데이터의 경우에는 더 효율적 )
  SSR는 요청시 pre-render
*/
