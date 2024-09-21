import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className='bg-gray-950 flex flex-col items-center justify-evenly py-8 gap-6'>
			<Image src={logo} width={35} height={35} alt="Logo" />
			<ul className='flex gap-8 items-center justify-center text-white'>
				<li><Link href='/'>Home</Link></li>
				<li><Link href='/projects'>Projects</Link></li>
				<li><Link href='/blog'>Blog</Link></li>
			</ul>
			<>
				<p className='mt-4 text-white'>All Rights Reserved | &copy; {currentYear} tobiabartolomei.com </p>
			</>
		</footer>
	);
};

export default Footer;