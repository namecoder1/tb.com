import { LASTPOSTS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import PostCard from "./ui/PostCard";
import { Button } from "./ui/button";
import Link from "next/link";

const options = { next: { revalidate: 60 } };

const LatestPosts = async () => {
	const latests = await client.fetch(LASTPOSTS_QUERY, {}, options)
	return (
		<div className="flex flex-col my-20"> 
			<h1 className="font-semibold text-3xl mb-3">Latest Articles</h1>
			<div className="grid grid-cols-1 grid-rows-2 md:grid-rows-none md:grid-cols-2 md:gap-x-10">
				{latests.map((latest) => {
					return (
						<PostCard 
						slug={latest.slug.current} 
						title={latest.title}
						image={latest.image}
						altText={latest.altText} 
						description={latest.description}
						id={latest._id}
						categories={latest.categories}
						/>
					)
				})}
			</div>
			<Button size='sm' asChild className='flex mx-auto mt-8'><Link href='/blog'>Guarda di Più</Link></Button>
		</div>
	);
};

export default LatestPosts;