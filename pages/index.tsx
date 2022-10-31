import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Aidan Bennett</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h2>Hi, I am Aidan Bennett,</h2>
				<h2>a full stack software engineer</h2>
				<p>
					I am a full stack software engineer I primarily use JavaScript, Python
					and Docker. Right now I am playing with Rust and Go. However, I would
					not say I am efficient in them just yet one day tho....
				</p>
			</main>
		</div>
	);
}
