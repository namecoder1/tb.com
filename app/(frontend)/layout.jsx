import '@/assets/styles/globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Montserrat } from 'next/font/google';


const montserrat = Montserrat({ subsets: ['latin'] })

const MainLayout = ({ children }) => {
	return (
		<html>
			<head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<link rel="icon" href="/icon-512x512.png" />
				<link rel="icon" href="/icon-192x192.png" />
			</head>
			<body className={montserrat.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
};

export default MainLayout;