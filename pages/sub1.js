import Layout from '@/components/Layout';
import SubLayout from '@/components/SubLayout';

export default function Sub1() {
	return (
		<>
			<p>sub1 컨텐츠 페이지</p>
		</>
	);
}

Sub1.getLayout = function getLayout(page) {
	return (
		<Layout>
			<SubLayout tit={'Sub1'}>{page}</SubLayout>
		</Layout>
	);
};
