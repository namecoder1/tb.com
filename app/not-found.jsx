'use client'

import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export const metadata = {
	title: 'Not Found | Tobia Bartolomei',
	description: 'Ciao, mi chiamo Tobia Bartolomei, sono un Junior Frontend Web Developer e questo è il mio Portfolio Personale.',
	language: 'it',
	openGraph: {
		title: 'Not Found',
		description: 'Ciao, mi chiamo Tobia Bartolomei, sono un Junior Frontend Web Developer e questo è il mio Portfolio Personale.',
    type: 'website',
    locale: 'it_IT',
    url: 'https://tob.codes',
    site_name: 'Tobia Bartolomei',
	},
}

const NotFound = () => {
	const router = useRouter();
	return (
		<div className="mx-10">
			<div className='flex flex-col items-start mx-auto justify-center gap-4 min-h-[90vh] max-w-sm'>
				<h1 className='text-5xl font-bold'>Errore 404</h1>
				<p>Il link potrebbe essere stato rimosso o potrebbe non esistere, torna alla Home e riprova.</p>
				<Button size='sm' onClick={() => router.back()}>Torna Indietro</Button>
			</div>
		</div>
	);
};

export default NotFound;