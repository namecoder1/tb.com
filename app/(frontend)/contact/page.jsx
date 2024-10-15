import Link from "next/link";
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub, FaXTwitter, FaPaypal } from "react-icons/fa6";
import { RiContactsLine } from "react-icons/ri";
import { PiShareNetworkBold } from "react-icons/pi";
import { client } from "@/sanity/lib/client";
import { INFO_QUERY } from "@/sanity/lib/queries";

import { FaInstagram } from 'react-icons/fa'
import ContactForm from "@/components/ContactForm";


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
					<div className="flex items-center justify-center gap-x-8 gap-y-4 mt-5 flex-wrap">
						<Link target="_blank" href={infos.social.insta.instaUrl} className="bg-secondary py-1 px-3 rounded-md flex items-center text-lg"><FaInstagram className="inline-block mr-2" />{infos.social.insta.instaName}</Link>
						<Link target="_blank" href={infos.social.github.githubUrl} className="bg-secondary py-1 px-3 rounded-md flex items-center text-lg"><FaGithub className="inline-block mr-2" />{infos.social.github.githubName}</Link>
						<Link target="_blank" href={infos.social.linkedin.linkedinUrl} className="bg-secondary py-1 px-3 rounded-md flex items-center text-lg"><FaLinkedin className="inline-block mr-2" />{infos.social.linkedin.linkedinName}</Link>
						<Link target="_blank" href={infos.social.x.xUrl} className="bg-secondary py-1 px-3 rounded-md flex items-center text-lg"><FaXTwitter className="inline-block mr-2" />{infos.social.x.xName}</Link>
						<Link target="_blank" href={infos.utils.paypalUrl} className="bg-secondary py-1 px-3 rounded-md flex items-center text-lg"><FaPaypal className="inline-block mr-2" />Tobia Bartolomei</Link>
					</div>
				</div>
			</div>

		</section>
	);
};

export default ContactPage;