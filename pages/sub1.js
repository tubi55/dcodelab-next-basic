import Layout from '@/components/Layout';

export default function Sub1() {
	return (
		<>
			<p>sub1 컨텐츠 페이지</p>
		</>
	);
}

Sub1.getLayout = function getLayout(page) {
	return <Layout tit={'Sub1'}>{page}</Layout>;
};
