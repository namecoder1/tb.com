import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaLinkedin } from 'react-icons/fa'
import { FaEnvelope, FaGithub, FaXTwitter } from "react-icons/fa6";
import { client } from "@/sanity/lib/client";
import { INFO_QUERY } from "@/sanity/lib/queries";

import { FaInstagram } from 'react-icons/fa'
import { Form, FormItem } from "@/components/ui/form";
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
			<h1 className='text-3xl font-semibold'>Contact Me</h1>
			<p className="mt-2">
				Se stai cercando qualcuno che possa trasformare le tue idee in un sito web moderno e performante, sei nel posto giusto.
				Non esitare a contattarmi per discutere il tuo prossimo progetto. Insieme possiamo fare grandi cose!
			</p>
			<div className="flex flex-col gap-y-20">
				<ContactForm />
				{/* <div className="my-4 flex flex-col items-center justify-center">
					<h2 className="text-left font-semibold underline underline-offset-2 text-xl mb-2">Scrivimi</h2>
					<div className="flex flex-col sm:flex-row gap-x-5 gap-y-3">
					<Button className="flex items-center">
						<Link href='mailto:bartolomei.private@gmail.com' className="flex items-center justify-center"><FaEnvelope className="inline-block mr-2" />bartolomei.private@gmail.com</Link>
					</Button>
					<Button className="flex items-center">
						<Link href='mailto:info@tobiabartolomei.com' className="flex items-center justify-center"><FaEnvelope className="inline-block mr-2" />info@tobiabartolomei.com</Link>
					</Button>
					</div>
				</div>
				<div className="mt-2 w-full gap-5 flex-col flex items-center justify-center">
					<h2 className="text-left font-semibold underline underline-offset-2 text-xl mb-2">Social Accounts</h2>
						<Button className="flex items-center">
							<Link href={infos.social.insta.instaUrl} className="flex items-center justify-center"><FaInstagram className="inline-block mr-2" />{infos.social.insta.instaName}</Link>
						</Button>
						<Button className="flex items-center">
							<Link href={infos.social.linkedin.linkedinUrl} className="flex items-center justify-center"><FaLinkedin className="inline-block mr-2" />{infos.social.linkedin.linkedinName}</Link>
						</Button>
						<Button className="flex items-center">
							<Link href={infos.social.github.githubUrl} className="flex items-center justify-center"><FaGithub className="inline-block mr-2" />{infos.social.github.githubName}</Link>
						</Button>
						<Button className="flex items-center">
							<Link href={infos.social.x.xUrl} className="flex items-center justify-center "><FaXTwitter className="inline-block mr-2" />{infos.social.x.xName}</Link>
						</Button>
				</div> */}

			</div>

		</section>
	);
};

export default ContactPage;