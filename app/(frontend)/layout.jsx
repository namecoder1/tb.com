import Upper from '@/components/Upper';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

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


const MainLayout = ({ children }) => {
	return (
			<>
				<Navbar />
				<main>
					{children}
					<Upper />
				</main>
				<Footer />
			</>
	);
};

export default MainLayout;