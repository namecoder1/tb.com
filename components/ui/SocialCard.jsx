import Image from "next/image";
import { Card } from "./card";
import { Button } from "./button";
import Link from "next/link";

const SocialCard = ({
	title,
	image,
	imageAlt,
	url,
	description,
	external = true
}) => {
	return (
		<Card className='bg-transparent text-white'>
			<Image src={image} alt={imageAlt} width={75} height={75} />
			<h1>{title}</h1>
			<p>{description}</p>
			{external ? (
				<Button asChild><Link href={url} target="_blank">Vai</Link></Button>
			): (
				<Button asChild><Link href={url}>Vai</Link></Button>
			)}
		</Card>
	);
};

export default SocialCard;