import Image from "next/image";
import { Card } from "./card";
import { Button } from "./button";
import Link from "next/link";

const ImageCard = ({
	image, 
	title, 
	subtitle, 
	description,
	link
}) => {
	return (
		<Link href={link} target="_blank" className="group relative block bg-black rounded-xl">
			<Image
				alt=""
				width={100}
				height={100}
				src={image}
				className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
			/>

			<div className="relative p-4 sm:p-6 lg:p-8">
				<p className="text-sm font-medium uppercase tracking-widest text-pink-500">{title}</p>

				<p className="text-xl font-bold text-white sm:text-2xl">{subtitle}</p>

				<div className="mt-32 sm:mt-48 lg:mt-64">
					<div
						className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
					>
						<p className="text-sm text-white">
							{description}
						</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ImageCard;