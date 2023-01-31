import Layout from '@/components/Layout';

export default function SSG(props) {
	return (
		<>
			<h2>Now: {props.now}</h2>
			<p>sub2 컨텐츠 페이지</p>
		</>
	);
}

SSG.getLayout = function getLayout(page) {
	return <Layout tit={'SSG'}>{page}</Layout>;
};

export async function getStaticProps() {
	console.log('ssg');

	return {
		props: { now: performance.now() },
	};
}

/*
	SSG - Static Site Generation

	//처음 페이지가 빌드될떄의 데이터로 pre-render처리
	//동적인 데이터 바인딩이 필요없는 정적인 데이터를 미리 빌드시에 가져와서
	//해당 데이터를 새로고침해도 서버에 재 호출 하지 않음
*/
