import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import PostCard from "@/components/ui/PostCard";


const options = { next: { revalidate: 60 } };

const BlogPage = async () => {
	const posts = await client.fetch(POSTS_QUERY, {}, options);

	return (
		<div className="flex flex-col md:grid md:grid-cols-2 xl:grid xl:grid-cols-3  my-20 gap-10">
			{posts.map((post) => {
				return (
					<PostCard 
						slug={post.slug.current} 
						title={post.title}
						image={post.image}
						altText={post.altText} 
						description={post.description}
						id={post._id}
						categories={post.categories}
					/>
				)
			})}
		</div>
	);
};

export default BlogPage;