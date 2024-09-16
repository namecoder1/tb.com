import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { urlFor } from "@/sanity/lib/image";
import { FaReadme } from 'react-icons/fa'

const PostCard = ({ 
	slug,
	description,
	image,
	title,
	id,
	altText,
	categories,
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
		<ul className="my-2">
				{categories.map((category) => {
					return <li key={category.slug} className='inline-block mr-2 text-sm bg-gray-300 py-1 px-2'><Link href={`/blog/${category.slug}`}>{category.title}</Link></li>;
				})}
			</ul>
		<p>{description}</p>
			<Button className='mt-3' asChild>
				<Link href={`/blog/${categories[0].slug}/${slug}`}>
					Leggi <FaReadme className="inline-block ml-3 text-lg" />
				</Link>
			</Button>
	</div>
	);
};

export default PostCard;