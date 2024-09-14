'use client'


import Image from "next/image";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import logo from '@/assets/images/logo.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { HamburgerMenu } from "./ui/HamburgerMenu";

const Navbar = () => {
	const getTime = () => {
		const options = {
			timeZone: 'Europe/Rome',
			hour: '2-digit',
			minute: '2-digit',
			hour12: false
		};
	
		const formatter = new Intl.DateTimeFormat('it-IT', options);
		const currentTime = formatter.format(new Date());
	
		return currentTime;
	};
	
	const time = getTime();

	return (
		<>
		<header className='flex items-center justify-center lg:justify-between md:mx-14 xl:mx-28 mt-4'>
			<div className='hidden lg:flex items-center justify-center border-[1px] border-slate-400 rounded-xl py-2 px-4'>
				<p className='font-normal'>Pesaro: <span className='font-medium ml-1'>{time}</span></p>
			</div>
			<nav className='flex items-center justify-evenly gap-40 md:gap-10 border-[1px] border-slate-400 rounded-xl md:py-[0.6rem] px-4'>
				<div>
					<Link href='/'>
						<Image src={logo} width={30} />
					</Link>
				</div>
				<ul className='md:flex gap-6 hidden'>
					<li><Link href='/'>Home</Link></li>
					<li><Link href='/about'>About</Link></li>
					<li><Link href='projects'>Projects</Link></li>
					<li><Link href='/blog'>Blog</Link></li>
				</ul>
				<div className='md:hidden'>
					<HamburgerMenu />
				</div>
				<Button size='xs' variant='outline' className='hidden'><Link href='/contact'>Contact</Link></Button>
			</nav>
			<Input type='search' placeholder='Cerca' className='border-[1px] border-slate-400 rounded-xl md:py-[0.6rem] px-4 py-2 m-0 h-[3.1rem] hidden lg:flex max-w-[180px]' />
		</header>
		<div className='absolute text-center bg-gray-200/40 pb-1 px-2 border-b-[1px] border-x-[1px] pt-[0.7px] border-slate-400 rounded-b-xl w-fit lg:hidden left-[29.5%] sm:left-[32.5%]'>
		<p className='font-normal'>Pesaro: <span className='font-medium ml-1'>{time}</span></p>
		</div>
		</>
	);
};

export default Navbar;