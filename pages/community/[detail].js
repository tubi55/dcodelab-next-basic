import Layout from '@/components/Layout';
import { useRouter } from 'next/router';

export default function Detail(props) {
	const router = useRouter();
	const { detail, name, age } = router.query;
	console.log(router.query);
	//loacalhost:3000/community/abc?name=david&age=20
	//slug뿐만 아니라 쿼리스트링값도 router.query로 전달 가능

	return (
		<>
			<p>{detail}</p>
			<p>name: {name}</p>
			<p>age: {age}</p>
		</>
	);
}

Detail.getLayout = function getLayout(page) {
	return <Layout tit={'Detail'}>{page}</Layout>;
};
