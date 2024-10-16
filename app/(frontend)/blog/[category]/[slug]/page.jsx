import { client } from '@/sanity/lib/client'
import { POST_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { formatDate } from '@/utils'
import TextBlock from '@/components/ui/TextBlock'
import Category from '@/components/ui/category'
import { Separator } from '@/components/ui/separator'
import { LuClock } from "react-icons/lu";
import ProgressBar from '@/components/ui/ProgessBar'
import { Button } from '@/components/ui/button'

export async function generateMetadata({ params }) {
  const project = await client.fetch(POST_QUERY, { slug: params.slug });
  if (!project) {
    return { title: 'Progetto Non Trovato' };
  }
  return {
    title: project.title || 'Nuovo Progetto', 
		description: project.seoDescription || 'Progetto Senza Descrizione',
		openGraph: {
			title: project.title || 'Nuovo Progetto',
      description: project.seoDescription || 'Progetto Senza Descrizione',
      type: 'website',
      locale: 'it_IT',
      url: `https://tob.codes/${project.categories[0].slug}/${project.href}`,
      site_name: 'Tobia Bartolomei',
      images: [
        {
          url: project.image,
          alt: project.imageAlt,
          width: 500,
          height: 200,
        },
      ],
		}
  };
}

const options = { next: { revalidate: 60 } }

export default async function PostPage({ params }) {
  const post = await client.fetch(POST_QUERY, params, options)
  if (!post) {
    notFound()
  }
  return (
    <section className="grid grid-cols-1 gap-6 my-20 mx-10 lg:mx-20 2xl:mx-32">
      <ProgressBar />
      <div className='grid grid-cols-1 grid-rows-1 xl:grid-cols-2 xl:grid-rows-1 gap-x-4'>
        {post?.image ?
        <Image
          className="w-full aspect-[800/300] rounded-xl"
          src={urlFor(post.image).width(800).height(300).quality(100).auto('format').url()}
          alt={post?.altText || ''}
          width="800"
          height="300"
        /> : null}
        <div className='flex flex-col items-start justify-start gap-4 mt-4 xl:mt-0'>
          <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-bold text-balance">{post?.title}</h1>
          <div className='flex items-center gap-1 text-sm'>
            <div className='flex gap-2 items-center'>
              <Image src={post?.author.image} alt={`Immagine di ${post?.author.name}`} width={40} height={40} className='rounded-full inline-block mr-1' />
              <div className="flex-col">
                <p>{post?.author.name}</p>
                <p>{formatDate(post?._updatedAt)} | <LuClock className='inline-block text-lg mx-1' />{post.readTime} Min</p>
              </div>
            </div>
          </div>
          <ul className='flex gap-2 mt-2 items-center justify-center'>
            {post?.categories.map((category) => {
              return (
                <Category slug={category.slug} title={category.title} id={category.id} />
              )
            })}
          </ul>
        </div>
      </div>
      <hr />
      {post?.body ? (
        <div className="prose-lg">
          <TextBlock value={post?.body}  />
        </div>
      ) : null}
      <Button className='w-fit mx-auto mt-10' asChild><Link href='/blog'>Torna indietro</Link></Button>
    </section>
  );
}
