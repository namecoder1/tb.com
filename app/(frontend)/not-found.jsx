import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
	return (
		<div className='flex flex-col items-center justify-center gap-4 min-h-[90vh]'>
			<h1 className='text-3xl font-bold'>Errore 404</h1>
			<p>Il link potrebbe essere stato rimosso, torna alla Home e riprova.</p>
			<Button variant='outline' size='sm' asChild><Link href='/'>Home</Link></Button>
		</div>
	);
};

export default NotFound;