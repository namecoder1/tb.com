import ContactForm from '@/components/ContactForm'

export const metadata = {
	title: 'Contattami',
	description: 'Ciao mi chiamo Tobia Bartolomei, sono un Junior FrontEnd Web Developer, usa questa pagina per metterti in contatto con me',
	openGraph: {
		title: 'Contattami',
		url: 'https://tob.codes/contact',
		description: 'Ciao mi chiamo Tobia Bartolomei, sono un Junior FrontEnd Web Developer, usa questa pagina per metterti in contatto con me',
	}
}

const ContactPage = () => {
	return (
		<section className='my-20 mx-10 lg:mx-20 2xl:mx-32'>
			<h1 className='text-3xl font-semibold flex items-center'>Contact Me</h1>
			<ContactForm />
		</section>
	);
};

export default ContactPage;