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
					<Link href='/csr' className={currentPath === '/csr' ? 'on' : ''}>
						Client Sider Render
					</Link>
				</li>
				<li>
					<Link href='/ssg' className={currentPath === '/ssg' ? 'on' : ''}>
						Static Site Generation
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
