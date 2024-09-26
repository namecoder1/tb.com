import '@/assets/styles/globals.css';
import Head from 'next/head';
import { Montserrat } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from '@/components/theme-provider';

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
	title: 'Home | Tobia Bartolomei',
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

const RootLayout = ({children}) => {
	return (
		<html lang='it'>
			<Head>
			<link rel="icon" href="/favicon.ico" />
			<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
			<link rel="icon" href="/icon-512x512.png" />
			<link rel="icon" href="/icon-192x192.png" />
			</Head>
			<body className={montserrat.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
					<Analytics />
					<SpeedInsights />
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;