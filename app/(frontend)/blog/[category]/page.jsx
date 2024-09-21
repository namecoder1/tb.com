import PostCard from "@/components/ui/PostCard";
import { client } from "@/sanity/lib/client";
import { CATEGORIES_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

const testQuery = '*[_type == "category"]{title, _id}';

const CategoryPage = async ({ params }) => {
  try {
    const categories = await client.fetch(CATEGORIES_QUERY, { categorySlug: params.category }, options);
     console.log(categories)
    return (
      <section className="flex flex-col my-20 mx-10 lg:mx-20 2xl:mx-32">
        <h1 className="font-semibold text-3xl mb-3 flex items-center">{categories.title}</h1>
        <div className="flex flex-col md:grid md:grid-cols-2 xl:grid xl:grid-cols-3  my-20 gap-10">
          {categories.posts.length == 0 && (
            <div className="text-left h-[50vh]">No posts found in this category.</div>
          )}
          {categories.posts.map((category) => (
            <PostCard 
            slug={category.slug.current} 
            title={category.title}
            image={category.image}
            altText={category.altText} 
            description={category.description}
            id={category.id}
            categories={category.categories}
            readTime={category.readTime}
            date={category._updatedAt}
            />
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
    return <div>Error fetching categories</div>;
  }
};

export default CategoryPage;

