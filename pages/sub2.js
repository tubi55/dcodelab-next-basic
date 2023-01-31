import Layout from '@/components/Layout';

export default function Sub2() {
	return (
		<>
			<p>sub2 컨텐츠 페이지</p>
		</>
	);
}

Sub2.getLayout = function getLayout(page) {
	return <Layout tit={'Sub2'}>{page}</Layout>;
};
