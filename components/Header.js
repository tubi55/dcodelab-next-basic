import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
	const router = useRouter();
	const currentPath = router.pathname;

	return (
		<header>
			<h1>
				<Link href='/'>DCODELAB</Link>
			</h1>

			<ul id='gnb'>
				<li>
					<Link href='/sub1' className={currentPath === '/sub1' ? 'on' : ''}>
						Sub1
					</Link>
				</li>
				<li>
					<Link href='/sub2' className={currentPath === '/sub2' ? 'on' : ''}>
						Sub2
					</Link>
				</li>
				<li>
					<Link href='/sub3' className={currentPath === '/sub3' ? 'on' : ''}>
						Sub3
					</Link>
				</li>
			</ul>
		</header>
	);
}
