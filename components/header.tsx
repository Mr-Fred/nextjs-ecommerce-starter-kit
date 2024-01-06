import Link from 'next/link';
import styles from './header/header.module.css';
import AuthBar from '@/components/header/authBar';
import logo from '@/assets/logo.svg';
import Image from 'next/image';


export default function Header() {
	return (
		<div className={'container'}>
			<header className={styles.header}>
				<AuthBar />
				<div className={styles['logo-container']}>
					<Link href={'/'} className={styles.logo}>
						<Image alt={'book haven logo'} width={250} height={250} src={logo.src} />
					</Link>
				</div>
			</header>
		</div>
	);
}
