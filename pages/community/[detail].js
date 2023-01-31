import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Detail(props) {
	const router = useRouter();
	const { detail, name, age } = router.query;
	const [Member, setMember] = useState('');

	useEffect(() => {
		fetch('/api/member')
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				setMember(json.name);
			});
	}, []);

	return (
		<>
			<p>{detail}</p>
			<p>name: {Member}</p>
		</>
	);
}

Detail.getLayout = function getLayout(page) {
	return <Layout tit={'Detail'}>{page}</Layout>;
};
