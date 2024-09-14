import {
  Card,
  CardContent,
  CardHeader,
	CardTitle
} from './ui/card';
import { } from 'react-icons'
import Image from 'next/image';
import Link from 'next/link';
import counseling from '@/assets/images/counseling.png'
import redesign from '@/assets/images/redesign.png'
import fromScratch from '@/assets/images/from-scratch.png'

const Skills = () => {
	return (
	<section className='mx-10 my-20 flex flex-col gap-8'>
		<h1 className='font-semibold text-3xl'>Skills</h1>
		<div className="flex flex-col lg:flex-row items-center justify-center gap-5 ">
			<Card className='bg-[#ffc700]/10 border-none'>
				<CardHeader><Image src={redesign} whidth={100} height={100} alt='Redesign icon' /></CardHeader>
				<CardTitle className='px-6 pb-5'>Redesign</CardTitle>
				<CardContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae atque facere at ipsam voluptatum, molestiae, perspiciatis eos doloremque doloribus quas aperiam ullam cum! Obcaecati dolores ducimus libero perferendis esse error!</CardContent>
			</Card>
			<Card className='border-none bg-[#f3f3f3]/20'>
				<CardHeader><Image src={fromScratch} whidth={100} height={100} alt='From scratch icon' /></CardHeader>
				<CardTitle className='px-6 pb-5'>From Scratch</CardTitle>
				<CardContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae atque facere at ipsam voluptatum, molestiae, perspiciatis eos doloremque doloribus quas aperiam ullam cum! Obcaecati dolores ducimus libero perferendis esse error!</CardContent>
			</Card>
			<Card className='bg-[#ffc700]/10 border-none'>
				<CardHeader><Image src={counseling} whidth={100} height={100} alt='Counseling icon' /></CardHeader>
				<CardTitle className='px-6 pb-5'>Counseling</CardTitle>
				<CardContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae atque facere at ipsam voluptatum, molestiae, perspiciatis eos doloremque doloribus quas aperiam ullam cum! Obcaecati dolores ducimus libero perferendis esse error!</CardContent>
			</Card>
		</div>
	</section>
	);
};

export default Skills;