import Header from '@/components/Header';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import pic1 from '@/public/pic1.jpg';
import Image from 'next/image';

export default function Home() {
	const [Dept, setDept] = useState([]);

	useEffect(() => {
		fetch('/api/department')
			.then((res) => res.json())
			.then((json) => setDept(json.members));
	}, []);

	useEffect(() => {
		console.log(Dept);
	}, [Dept]);

	return (
		<>
			<Head>
				<title>Dcodelab-Main</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />

			<main className='Main'>
				<h1>DCODELAB Main</h1>
				<div className='pic'>
					<Image src={pic1} alt='pic1' priority fill quality={50} />
				</div>
				{Dept.map((member, idx) => {
					return (
						<article key={idx}>
							<h2>{member.name}</h2>
							<p>{member.position}</p>
						</article>
					);
				})}
			</main>
		</>
	);
}
