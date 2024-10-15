import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { Separator } from "./ui/separator";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className='flex flex-col gap-y-6 lg:flex-row items-center justify-evenly gap-x-14 text-sm px-5 py-10 bg-slate-950 dark:bg-zinc-800/70 text-white'>
			<Image src={logo} width={50} height={50} alt="Logo" />
			<ul className='flex gap-x-8 flex-wrap gap-y-3 items-center justify-center mt-4 lg:mt-0'>
				<li><Link href='/'>Home</Link></li>
				<li><Link href='/about'>About</Link></li>
				<li><Link href='/projects'>Projects</Link></li>
				<li><Link href='/blog'>Blog</Link></li>
				<li><Link href='/contact'>Contact</Link></li>
			</ul>
			<>
			<Separator className='dark:bg-gray-700/40 bg-white/10 lg:hidden' />
				<p className="text-center">All Rights Reserved | &copy; {currentYear} tobiabartolomei.com </p>
			</>
		</footer>
	);
};

export default Footer;