import { Button } from "@/components/ui/button";
import PostCard from "@/components/ui/PostCard";
import { client } from "@/sanity/lib/client";
import { CATEGORIES_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";

const options = { next: { revalidate: 60 } };

export async function generateMetadata({ params }) {
  const categories = await client.fetch(CATEGORIES_QUERY, { categorySlug: params.category });
  if (!categories) {
    return { title: 'Progetto Non Trovato' };
  }
  return {
    title: categories.title || 'Nuovo Progetto', 
		description: categories.description || 'Progetto Senza Descrizione',
		openGraph: {
			title: categories.title || 'Nuovo Progetto',
      description: categories.description || 'Progetto Senza Descrizione',
      type: 'website',
      locale: 'it_IT',
      url: `https://tob.codes/blog/${categories.slug}`,
      site_name: 'Tobia Bartolomei',
      images: [
        {
          url: categories.image,
          alt: categories.imageAlt,
          width: 500,
          height: 200,
        },
      ],
		}
  };
}

const CategoryPage = async ({ params }) => {
  try {
    const categories = await client.fetch(CATEGORIES_QUERY, { categorySlug: params.category }, options);
    return (
      <section className="flex flex-col my-20 mx-10 lg:mx-20 2xl:mx-32">
        <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl mb-3 flex items-center">{categories.title}</h1>
        <p className="max-w-xl">{categories.description}</p>
        <div className="flex flex-col md:grid md:grid-cols-2 xl:grid xl:grid-cols-3  my-20 gap-10">
          {categories.posts.length == 0 && (
            <div className="text-left h-[50vh]">Nessun post disponibile per questa categoria</div>
          )}
          {categories.posts.map((category) => (
            <PostCard 
            slug={category.slug} 
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
        <Button className='mx-auto w-fit' asChild variant='outline'><Link href='/blog'>Torna indietro</Link></Button>
      </section>
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
    return <div>Error fetching categories</div>;
  }
};

export default CategoryPage;

