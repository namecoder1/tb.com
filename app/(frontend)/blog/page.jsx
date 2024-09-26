import { POSTS_QUERY } from "@/sanity/lib/queries";
import { ALLCATEGORIES_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import PostCard from "@/components/ui/PostCard";
import { GrArticle } from "react-icons/gr";
import Category from "@/components/ui/category";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import SearchBar from "@/components/ui/SearchBar";

export const metadata = {
	title: 'Blog | Tobia Bartolomei',
	description: 'Dentro al mio blog puoi trovare molti articoli di diverse categorie. I miei argomenti preferiti sono il Web Develop e le News sul mondo Tech.',
	openGraph: {
		titlle: 'Blog | Tobia Bartolomei',
		description: 'Dentro al mio blog puoi trovare molti articoli di diverse categorie. I miei argomenti preferiti sono il Web Develop e le News sul mondo Tech.',
		url: 'https://tob.codes/blog'
	}
}

const options = { next: { revalidate: 60 } };

const BlogPage = async () => {
	const posts = await client.fetch(POSTS_QUERY, {}, options);
	const categories = await client.fetch(ALLCATEGORIES_QUERY, {}, options);

	return (
		<section className="flex flex-col my-20 mx-10 lg:mx-20 2xl:mx-32">
			<h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl mb-3 flex items-center"><GrArticle className="inline-block mr-2" />Blog</h1>
			<div className="flex flex-col items-start justify-start gap-4 my-10">
				<h2 className="font-semibold text-xl">Categorie</h2>
				<ScrollArea className="flex gap-1 w-full whitespace-nowrap p-1 h-full">
					{categories.map((category) => {
						return (
							<Category id={category.id} slug={category.slug} title={category.title} />
						)
					})}
					<ScrollBar orientation='horizontal' />
				</ScrollArea>
			</div>
			<div className="flex w-full lg:hidden">
				<SearchBar className='flex gap-1 items-center justify-center w-full' button />
			</div>
			<div className="flex flex-col md:grid md:grid-cols-2 xl:grid xl:grid-cols-3 my-20 gap-10">
				{posts.map((post) => {
					return (
						<PostCard 
							slug={post.slug.current} 
							title={post.title}
							image={post.image}
							altText={post.altText} 
							description={post.description}
							id={post.id}
							categories={post.categories}
							readTime={post.readTime}
							date={post._updatedAt}
						/>
					)
				})}
			</div>
		</section>
	);
};

export default BlogPage;