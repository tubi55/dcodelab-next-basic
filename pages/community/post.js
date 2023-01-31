import Layout from '@/components/Layout';

export default function Post() {
	return (
		<>
			<p>Post Ccontent Page</p>
		</>
	);
}

Post.getLayout = function getLayout(page) {
	return <Layout tit={'Post'}>{page}</Layout>;
};
