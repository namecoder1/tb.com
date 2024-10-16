import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { FRAMEWORKS_QUERY, TOOLS_QUERY, LANGUAGES_QUERY } from '@/sanity/lib/queries';

const options = { next: { revalidate: 60 } };

const Tools = async () => {
	const frameworks = await client.fetch(FRAMEWORKS_QUERY, {}, options);
	const tools = await client.fetch(TOOLS_QUERY, {}, options);
	const languages = await client.fetch(LANGUAGES_QUERY, {}, options);
	return (
		<section className=' my-32 flex flex-col mx-10 lg:mx-20 2xl:mx-32'>
			<h1 className='font-semibold text-3xl sm:text-4xl md:text-5xl mb-3'>Tools & Languages</h1>
			<p>Queste sono le skill che ho sviluppato dall'inizio del mio percorso nel mondo dello sviluppo.</p>
			<p>Attualmente prediligo il mondo di React e Next, mentre per lo stile utilizzo Tailwind unito a Shadcn, di cui mi sono totalmente innamorato dalla prima riga di codice.</p>
			<p><span className="font-semibold">ps:</span> so React non è un framework anche se l'ho inserito in quella lista, non arrabbiatevi 😁.</p>
			<div className="flex items-start justify-evenly flex-wrap gap-x-10 gap-y-20 md:grid md:grid-cols-3 md:grid-rows-1 mt-10">
				<div className="flex flex-col gap-6 items-center justify-start">
					<h1>FRAMEWORKS</h1>
					<ul className="flex flex-col gap-5">
						{frameworks.map((framework) => {
							return (
								<li key={framework.id} className='flex items-center gap-5'>
									<Image src={framework.image} alt={framework.imageAlt} width={40} height={40} />
									<h2 className='text-lg font-semibold mt-2'>{framework.title}</h2>
								</li>
							)
						})}
					</ul>
				</div>
				<div className="flex flex-col gap-6 items-center justify-start">
					<h1>LANGUAGES</h1>
					<ul className="flex flex-col gap-5">
						{languages.map((language) => {
							return (
								<li key={language.id} className='flex items-center gap-5'>
									<Image src={language.image} alt={language.imageAlt} width={40} height={40} />
									<h2 className='text-lg font-semibold mt-2'>{language.title}</h2>
								</li>
							)
						})}
					</ul>
				</div>
				<div className="flex flex-col gap-6 items-center justify-start">
					<h1>TOOLS</h1>
					<ul className="flex flex-col gap-5">
						{tools.map((tool) => {
							return (
								<li key={tool.id} className='flex items-center gap-5'>
									<Image src={tool.image} alt={tool.imageAlt} width={40} height={40} />
									<h2 className='text-lg font-semibold mt-2'>{tool.title}</h2>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Tools;