import Head from 'next/head';
import Header from './Header';

export default function Layout(props) {
	return (
		<>
			<Head>
				<title>{`Dcodelab-${props.tit}`}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />
			<main className={`Sub ${props.tit}`}>
				<h1>{props.tit}</h1>
				<section>{props.children}</section>
			</main>
		</>
	);
}
