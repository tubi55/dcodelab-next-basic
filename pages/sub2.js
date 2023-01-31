import Layout from '@/components/Layout';
import SubLayout from '@/components/SubLayout';

export default function Sub2() {
	return (
		<>
			<p>sub2 컨텐츠 페이지</p>
		</>
	);
}

Sub2.getLayout = function getLayout(page) {
	return (
		<Layout>
			<SubLayout tit={'Sub2'}>{page}</SubLayout>
		</Layout>
	);
};
