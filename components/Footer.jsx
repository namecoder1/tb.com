import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className='flex gap-4 lg:gap-20 justify-center flex-col lg:flex-row items-center lg:justify-evenly px-4 py-2 mx-auto lg: mx-10 my-0 mb-2 border-[1px] dark:text-white border-slate-400 dark:border-white rounded-xl w-fit'>
			<Image src={logo} width={35} height={35} alt="Logo" />
			<ul className='flex gap-8 items-center justify-center text-white'>
				<li><Link href='/'>Home</Link></li>
				<li><Link href='/about'>About</Link></li>
				<li><Link href='/projects'>Projects</Link></li>
				<li><Link href='/blog'>Blog</Link></li>
				<li><Link href='/contact'>Contact</Link></li>
			</ul>
			<>
				<p className='text-white'>All Rights Reserved | &copy; {currentYear} tobiabartolomei.com </p>
			</>
		</footer>
	);
};

export default Footer;