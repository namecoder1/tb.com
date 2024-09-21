import Image from "next/image";
import logo from '@/assets/images/logo.png'
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import SocialCard from "@/components/ui/SocialCard";

const SocialPage = () => {
	return (
		<section className="text-white flex flex-col gap-y-10 md:grid md:grid-cols-6">
			<aside className="col-span-2">
				<div className="flex flex-col ">
					<Image src={logo} width={100} height={100} alt="Tobia Bartolomei's Image" className='w-fit h-fit' />
					<h1 className="text-4xl font-semibold">Tobia Bartolomei</h1>
					<p>🛠️ Junior Front-End Web Developer</p>
					<p>🇮🇹 Pesaro, PU, Italy</p>
				</div>
			</aside>
			<div className="col-span-4">
				<div className=" grid grid-cols-2">
					<SocialCard className='bg-gray-400' 
						title='prova 1'
						image={logo}
						imageAlt='ciao'
						url='/ciao'
						description='beuicgw'
						external
					/>
					<SocialCard className='bg-gray-400' 
						title='prova 1'
						image={logo}
						imageAlt='ciao'
						url='/ciao'
						description='beuicgw'
						external
					/>
				</div>
			</div>

		</section>
	);
};

export default SocialPage;