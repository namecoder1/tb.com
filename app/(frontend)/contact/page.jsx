import Link from "next/link";
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub, FaXTwitter, FaPaypal } from "react-icons/fa6";
import { RiContactsLine } from "react-icons/ri";
import { PiShareNetworkBold } from "react-icons/pi";
import { client } from "@/sanity/lib/client";
import { INFO_QUERY } from "@/sanity/lib/queries";
import { FaInstagram } from 'react-icons/fa'
import ContactForm from "@/components/ContactForm";
import Spinner from "@/components/ui/Spinner";

const options = { next: { revalidate: 60 } };

export const metadata = {
	title: 'Contattami',
	description: 'Ciao mi chiamo Tobia Bartolomei, sono un Junior FrontEnd Web Developer, usa questa pagina per metterti in contatto con me',
	openGraph: {
		title: 'Contattami',
		url: 'https://tob.codes/contact',
		description: 'Ciao mi chiamo Tobia Bartolomei, sono un Junior FrontEnd Web Developer, usa questa pagina per metterti in contatto con me',
	}
}

const ContactPage = async () => {
	const infos = await client.fetch(INFO_QUERY, {}, options)
	return (
		<section className='my-20 mx-10 lg:mx-20 2xl:mx-32'>
			<h1 className='font-semibold text-3xl sm:text-4xl md:text-5xl mb-3 flex items-center'><RiContactsLine className="inline-block mr-2" />Contact Me</h1>
			<p className="mt-5">
				Se stai cercando qualcuno che possa trasformare le tue idee in un sito web moderno e performante, sei nel posto giusto.
				Non esitare a contattarmi per discutere il tuo prossimo progetto. Insieme possiamo fare grandi cose!
			</p>
			<div className="flex flex-col gap-y-20">
				<ContactForm />
				<div>
					<h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl flex items-center"><PiShareNetworkBold className="inline-block mr-2" />Social Accounts</h1>
					<div className="flex flex-wrap items-center justify-center gap-5 my-5">
						<Link target="" href={infos.social.insta.instaUrl} className="flex flex-col rounded-md border-[1px] w-full md:w-[300px] py-3 px-5 bg-gray-100/60 dark:bg-neutral-800/30">
							<FaInstagram className="text-5xl mb-3" />
							<span className="text-lg font-medium underline underline-offset-2 mb-1">{infos.social.insta.instaName}</span>
							<p className="text-sm">Nel mio profilo Instagram condivido contenuti relativi alla Programmazione Web</p>
						</Link>
						<Link target="" href={infos.social.github.githubUrl} className="flex flex-col rounded-md border-[1px] w-full md:w-[300px] py-3 px-5 bg-gray-100/60 dark:bg-neutral-800/30">
							<FaGithub className="text-5xl mb-3" />
							<span className="text-lg font-medium underline underline-offset-2 mb-1">{infos.social.github.githubName}</span>
							<p className="text-sm">Sul mio account Github puoi trovare tutti i progetti a cui ho lavorato, scoprili ora!</p>
						</Link>
						<Link target="" href={infos.social.linkedin.linkedinUrl} className="flex flex-col rounded-md border-[1px] w-full md:w-[300px] py-3 px-5 bg-gray-100/60 dark:bg-neutral-800/30">
							<FaLinkedin className="text-5xl mb-3" />
							<span className="text-lg font-medium underline underline-offset-2 mb-1">{infos.social.linkedin.linkedinName}</span>
							<p className="text-sm">Se vuoi vedere la mia formazione professionale fatti un giro sul mio profilo LinkedIn.</p>
						</Link>
						<Link target="" href={infos.social.x.xUrl} className="flex flex-col rounded-md border-[1px] w-full md:w-[300px] py-3 px-5 bg-gray-100/60 dark:bg-neutral-800/30">
							<FaXTwitter className="text-5xl mb-3" />
							<span className="text-lg font-medium underline underline-offset-2 mb-1">{infos.social.x.xName}</span>
							<p className="text-sm">Ogni buon programmatore deve avere un account X per stare sempre al passo, ecco il mio.</p>
						</Link>
						<Link target="" href={infos.utils.paypalUrl} className="flex flex-col rounded-md border-[1px] w-full md:w-[300px] py-3 px-5 bg-gray-100/60 dark:bg-neutral-800/30">
							<FaPaypal className="text-5xl mb-3" />
							<span className="text-lg font-medium underline underline-offset-2 mb-1">Tobia Bartolomei</span>
							<p className="text-sm">Nel caso volessi contribuire alla crescita dei miei progetti ecco il mio link Paypal!</p>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactPage;