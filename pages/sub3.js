import Layout from '@/components/Layout';
import SubLayout from '@/components/SubLayout';

export default function Sub3() {
	return (
		<>
			<p>sub3 컨텐츠 페이지</p>
		</>
	);
}

Sub3.getLayout = function getLayout(page) {
	return (
		<Layout>
			<SubLayout tit={'Sub3'}>{page}</SubLayout>
		</Layout>
	);
};
