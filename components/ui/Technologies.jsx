import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from "./button";


import Image from "next/image";
import Link from "next/link";

const Technologies = ({ technology, id, image, imageAlt, description, link }) => {
	return (
		<HoverCard key={id}>
			<HoverCardTrigger asChild>
				<div className="bg-gray-200 w-fit h-fit flex items-center justify-center gap-2 py-2 px-4 rounded-lg" >
					<Image src={image} alt={imageAlt} width={30} height={30} />
					<p>{technology}</p>
				</div>
			</HoverCardTrigger>
			<HoverCardContent className='max-w-sm'>
				<p>{description}</p>
				<Button className='mt-2 w-full' size='xs'><Link href={link} target="_blank">Visita</Link></Button>
			</HoverCardContent> 
		</HoverCard>
	);
};

export default Technologies;