import {
  Card,
  CardContent,
  CardHeader,
	CardTitle
} from './ui/card';
import { } from 'react-icons';
import Image from 'next/image';
import Link from 'next/link';
import counseling from '@/assets/images/counseling-white.png';
import redesign from '@/assets/images/redesign-white.png';
import fromScratch from '@/assets/images/from-scratch-white.png';

const Skills = () => {
	return (
	<section className='my-32 flex flex-col gap-8 bg-slate-950 dark:bg-zinc-800/70 text-white py-20 px-10 lg:px-20 2xl:px-32'>
		<div className='lg:grid lg:grid-cols-5 mb-10'>
			<h1 className='font-semibold text-3xl sm:text-4xl md:text-5xl mb-3 col-span-3'>Skills</h1>
			<p className='col-span-2'>Nel corso dei miei lavori per clienti, side projects e siti creati come allenamento ho sviluppato queste skills.</p>
		</div>
		<div className="flex flex-col lg:flex-row items-center justify-center gap-5 ">
			<Card className='bg-transparent text-white'>
				<CardHeader><Image src={redesign} whidth={100} height={100} alt='Redesign icon' /></CardHeader>
				<CardTitle className='px-6 pb-5'>Redesign</CardTitle>
				<CardContent>Se pensi che lo stile di come il tuo servizio appare online non sia piú al passo con i tempi posso aiutarti nella creazione dello stesso proprio come lo vuoi tu.</CardContent>
			</Card>
			<Card className='bg-transparent text-white'>
				<CardHeader><Image src={fromScratch} whidth={100} height={100} alt='From scratch icon' /></CardHeader>
				<CardTitle className='px-6 pb-5'>From Scratch</CardTitle>
				<CardContent>Mi occupo di creare da zero l'idea del sito, dal design alla programmazione, usando strumenti come Figma e Illustrator, con l'ottica di creare l'idea che vive nella mente del cliente.</CardContent>
			</Card>
			<Card className='bg-transparent text-white'>
				<CardHeader><Image src={counseling} whidth={100} height={100} alt='Counseling icon' /></CardHeader>
				<CardTitle className='px-6 pb-5'>Counseling</CardTitle>
				<CardContent>Il tuo sito non riceve visite? Sei sicuro di aver fatto le mosse giuste in quanto a pubblicità e giusta presenza online? Contattami per una consulenza e vediamo che passi fare. </CardContent>
			</Card>
		</div>
	</section>
	);
};

export default Skills;