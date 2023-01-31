import Header from '@/components/Header';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Dcodelab-Main</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />

			<main className='Main'>
				<h1>DCODELAB Main</h1>
			</main>
		</>
	);
}
