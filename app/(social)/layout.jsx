import '@/assets/styles/globals.css';
import { Montserrat } from 'next/font/google';


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
				<main className='bg-gray-950 h-[100vh]'>
					{children}
				</main>
			</body>
		</html>
	);
};

export default MainLayout;