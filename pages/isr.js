import Layout from '@/components/Layout';

export default function ISR(props) {
	return (
		<>
			<h2>{props.now}</h2>
			<p>Incremental Static Regeneration (점진적인 정적 페이지 재생성)</p>
		</>
	);
}

ISR.getLayout = function getLayout(page) {
	return <Layout tit={'ISR'}>{page}</Layout>;
};

export async function getStaticProps() {
	console.log('ssg');

	return {
		//일정 주기마다 새로운 데이터를 갱신 (revalidate: 초)
		//ssg와 마찬가지로 첨 빌드 시점에 정적 페이지 pre-render
		//차이점은 ravalidate로 지정한 시간마다 재 호출
		//오늘의 추천상품같은 하루 단위로 변경되는 데이터를 출력해야 되는 페이지에 주로 활용
		props: { now: performance.now() },
		revalidate: 5,
	};
}
