'use client'

import Image from "next/image";
import Clock from "./ui/Clock";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import logo from '@/assets/images/logo.png';
import { HamburgerMenu } from "./ui/HamburgerMenu";
import { ThemeToggle } from "./ui/ThemeToggle";

const Navbar = () => {
	return (
		<>
		<header className='flex items-center justify-center lg:justify-between md:mx-14 xl:mx-28 mt-4'>
			<div className='hidden lg:flex items-center justify-center border-[1px] dark:text-white border-slate-400 dark:border-white rounded-xl py-2 px-4'>
				<p className='font-normal'>Pesaro: <Clock /></p>
			</div>
			<nav className='flex items-center justify-evenly gap-40 md:gap-10 border-[1px] dark:text-white border-slate-400 dark:border-white rounded-xl md:py-[0.6rem] px-4'>
				<div>
					<Link href='/'>
						<Image src={logo} width={30} alt="Logo" />
					</Link>
				</div>
				<ul className='md:flex gap-6 hidden'>
					<li><Link href='/'>Home</Link></li>
					<li><Link href='/about'>About</Link></li>
					<li><Link href='/projects'>Projects</Link></li>
					<li><Link href='/blog'>Blog</Link></li>
				</ul>
				<div className='md:hidden'>
					<HamburgerMenu />
				</div>
			</nav>
			<div className="flex items-center justify-center gap-2">
				<div className="ml-2 lg:ml-0">
					<ThemeToggle />
				</div>
				<div className='hidden lg:flex'>
					<Button className='border-[1px] bg-transparent text-black dark:text-white hover:bg-transparent border-slate-400 dark:border-white rounded-xl' asChild><Link href='/contact'>Contattami</Link></Button>
				</div>
			</div>
		</header>
		</>
	);
};

export default Navbar;