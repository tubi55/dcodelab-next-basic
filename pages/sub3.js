import Layout from '@/components/Layout';

export default function Sub3() {
	return (
		<>
			<p>sub3 컨텐츠 페이지</p>
		</>
	);
}

Sub3.getLayout = function getLayout(page) {
	return <Layout tit={'Sub3'}>{page}</Layout>;
};
