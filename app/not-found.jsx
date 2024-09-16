'use client'

import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

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