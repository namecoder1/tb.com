import { LASTPOSTS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import PostCard from "./ui/PostCard";
import { Button } from "./ui/button";
import Link from "next/link";

const options = { next: { revalidate: 60 } };

const LatestPosts = async () => {
	const latests = await client.fetch(LASTPOSTS_QUERY, {}, options)
	return (
		<div className="flex flex-col my-20 mx-10 lg:mx-20 2xl:mx-32"> 
			<h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl mb-3">Latest Articles</h1>
			<div className="grid grid-cols-1 grid-rows-2 md:grid-rows-none md:grid-cols-2 md:gap-x-10">
				{latests.map((latest) => {
					return (
						<PostCard 
						slug={latest.slug.current} 
						title={latest.title}
						image={latest.image}
						altText={latest.altText} 
						description={latest.description}
						id={latest.id}
						categories={latest.categories}
						readTime={latest.readTime}
						date={latest._updatedAt}
						button={false}  // disable button for latest posts 2 cols layout 2 cols gap 10px 10px layout for desktop
						/>
					)
				})}
			</div>
			<Button size='sm' asChild className='flex mx-auto mt-8'><Link href='/blog'>Guarda di Più</Link></Button>
		</div>
	);
};

export default LatestPosts;