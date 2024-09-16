import PostCard from "@/components/ui/PostCard";
import { client } from "@/sanity/lib/client";
import { CATEGORIES_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

const CategoryPage = async ({ params }) => {
  const { category } = params;
  const categoryData = await client.fetch(CATEGORIES_QUERY, { categorySlug: category }, options);

  return (
    <div className="my-20">
      <h1 className="text-black text-3xl font-semibold">{categoryData.title}</h1>
      <ul className="flex gap-10">
        {categoryData.posts.map((post) => (
					<PostCard 
					slug={post.slug.current} 
					title={post.title}
					image={post.image}
					altText={post.altText} 
					description={post.description}
					id={post._id}
					categories={post.categories}
				/>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
