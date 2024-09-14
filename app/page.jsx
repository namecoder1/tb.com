import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaMapPin } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { PiReadCvLogoDuotone } from "react-icons/pi";
import cardImage from "@/assets/images/profile.jpg";
import { Source_Code_Pro } from 'next/font/google'
import profile from '@/assets/images/profile.jpg';

import { SiAstro } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSanity } from "react-icons/si";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";

const code = Source_Code_Pro({ subsets: ['latin'] })


const HomePage = () => {

	const skills = [
		{name: 'React', logo: 'FaReact' },
		{name: 'Next', logo: 'RiNextjsLine' },
		{name: 'Astro', logo: 'SiAstro' },
		{name: 'Tailwind', logo: 'RiTailwindCssFill' },
		{name: 'Sanity', logo: 'SiSanity' },
	]

	return (
		<>
		<section className='flex flex-col md:flex-row items-center justify-center space-x-10 mt-16'>
			<Card className='text-black w-fit p-2 my-10 '>
				<CardHeader className='flex flex-col items-center'>
					<Image src={cardImage} width={150} height={150} className='rounded-full' />
					<h1 className='text-xl font-semibold'>Tobia Bartolomei</h1>
					<h2 className='text-sm'>Junior Frontend Web Developer</h2>
					<Link className='mt-2' target='_blank' href="https://wakatime.com/@018edc23-7885-44d3-8b1a-efd38be8a6f6"><img src="https://wakatime.com/badge/user/018edc23-7885-44d3-8b1a-efd38be8a6f6.svg" alt="Total time coded since Apr 14 2024" /></Link>
				</CardHeader>
				<CardContent>
					<ul className='flex mx-auto flex-col items-start justify-center text-sm'>
						<li><Link className='hover:underline underline-offset-2' target='_blank' href='mailto:bartolomei.private@gmail.com'><MdOutlineMailOutline className='inline-block mr-2' />bartolomei.private@gmail.com</Link></li>
						<li><Link className='hover:underline underline-offset-2' target='_blank' href='https://maps.app.goo.gl/9sr6cwpYgZdGvE6B8?g_st=ic'><FaMapPin className='inline-block mr-2' />Pesaro, Italy 🇮🇹</Link></li>
						<li><Link className='hover:underline underline-offset-2' target='_blank' href='tel:3486974498'><MdWorkOutline className='inline-block mr-2' />Full-Time | Freelancer</Link></li>
						<li><Link className='hover:underline underline-offset-2' target='_blank' href='https://github.com/namecoder1'><FaGithub className='inline-block mr-2' />namecoder1</Link></li>
					</ul>
				</CardContent>
				<CardFooter className='flex items-center justify-center'>
					<Button asChild><a href='/CV.pdf.zip' download='CV'>Download CV <PiReadCvLogoDuotone className='inline-block text-xl ml-2' /></a></Button>
				</CardFooter>
			</Card>
			<div className='col-span-2 flex flex-col items-center justify-center gap-10'>
					<h1 className=' text-5xl max-w-sm'>Ciao sono <span className='text-yellow-500 font-semibold'>Tobia</span>, Junior Frontend Web Developer</h1>
					<p className='max-w-lg'>Mi piace creare interfacce intuitive e moderne, adoro il design minimal e pulito, mi piace scoprire nuovi tool e personalizzare qualsiasi cosa.</p>
			</div>
		</section>
		<Skills />
		<Tools />
		</>
	);
};

export default HomePage;