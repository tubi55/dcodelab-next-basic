import Layout from '@/components/Layout';
import { useEffect, useState } from 'react';

export default function CSR() {
	console.log('client');
	const [Now, setNow] = useState('');

	useEffect(() => {
		setNow(performance.now());
	}, []);

	return (
		<>
			<h2>{Now}</h2>
			<p>sub1 컨텐츠 페이지</p>
		</>
	);
}

CSR.getLayout = function getLayout(page) {
	return <Layout tit={'CSR'}>{page}</Layout>;
};
