import '@/assets/styles/globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Montserrat } from 'next/font/google';

export const metadata = {
	title: {
		template: '%s | Tobia Bartolomei',
		default: 'Home | Tobia Bartolomei'
	},
	description: 'Ciao, mi chiamo Tobia Bartolomei, sono un Junior Frontend Web Developer e questo è il mio Portfolio Personale.',
	language: 'it',
	openGraph: {
		title: {
			template: '%s | Tobia Bartolomei',
			default: 'Home'
		},
		description: 'Ciao, mi chiamo Tobia Bartolomei, sono un Junior Frontend Web Developer e questo è il mio Portfolio Personale.',
    type: 'website',
    locale: 'it_IT',
    url: 'https://tob.codes',
    site_name: 'Tobia Bartolomei',
	},

}

const montserrat = Montserrat({ subsets: ['latin'] })

const MainLayout = ({ children }) => {
	return (
		<html lang='it'>
			<head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<link rel="icon" href="/icon-512x512.png" />
				<link rel="icon" href="/icon-192x192.png" />
			</head>
			<body className={montserrat.className}>
				<Navbar />
				<main>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
};

export default MainLayout;