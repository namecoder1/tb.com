import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { urlFor } from "@/sanity/lib/image";
import { FaReadme } from 'react-icons/fa'
import { LuClock } from "react-icons/lu";
import Category from "./category";

import { Separator } from "./separator";
import { formatDate } from "@/utils";

const PostCard = ({ 
	slug,
	description,
	image,
	title,
	id,
	altText,
	categories,
	readTime,
	date,
	button = true
 }) => {
	return (
		<div key={id} className='flex flex-col items-start py-5 px-2'>
			{image ?
			<Image
				className="w-full h-full aspect-[1000/400] rounded-xl"
				src={urlFor(image).width(1000).height(400).quality(80).auto('format').url()}
				alt={altText || ''}
				width={800}
				height={300}
			/> : null}
			<h2 className='text-xl font-semibold mt-5'>{title}</h2>
			<p>{formatDate(date)} | <LuClock className='inline-block text-lg mx-1' />{readTime} Min</p>
			<ul className="my-2 flex">
					{categories && categories.map((category) => {
						return (
							<Category slug={category.slug} title={category.title} id={category.id} />
						)
					})}
			</ul>
			<Separator className='my-2' />
			<p>{description}</p>
			{button == true ? (
				<Button className='mt-3' asChild>
					<Link href={`/blog/${categories[0].slug}/${slug}`}>
						Leggi <FaReadme className="inline-block ml-3 text-lg" />
					</Link>
				</Button>
			): null}
		</div>
	);
};

export default PostCard;