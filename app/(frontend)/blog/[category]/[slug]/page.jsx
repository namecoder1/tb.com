import { client } from '@/sanity/lib/client'
import { POST_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { formatDate } from '@/utils'
import { PortableText } from "next-sanity";
import { components } from "@/components/ui/PortableText";
import Category from '@/components/ui/category'


const options = { next: { revalidate: 60 } }

export default async function Page({ params }) {
  const post = await client.fetch(POST_QUERY, params, options)
  if (!post) {
    notFound()
  }
  return (
    <section className="grid grid-cols-1 gap-6 p-12">
      <div className='grid grid-cols-1 grid-rows-1 xl:grid-cols-2 xl:grid-rows-1 gap-x-4'>
        {post?.image ?
        <Image
          className="w-full aspect-[800/300] rounded-xl"
          src={urlFor(post.image).width(800).height(300).quality(100).auto('format').url()}
          alt={post?.image?.alt || ''}
          width="800"
          height="300"
        /> : null}
        <div className='flex flex-col items-start justify-start gap-2 mt-4 xl:mt-0'>
          <h1 className="md:text-4xl 2xl:text-5xl font-bold text-balance">{post?.title}</h1>
          <p className="text-gray-600">
            <span>
              <Image src={post?.author.image} width={40} height={40} className='rounded-full inline-block mr-1' /> {post?.author.name}
            </span>{' '}
            | {formatDate(post?._updatedAt)}
          </p>
          <ul className='flex gap-2 mt-2'>
            {post?.categories.map((category) => {
              return (
                <Category slug={category.slug} title={category.title} id={category._id} />
              )
            })}
          </ul>
        </div>
      </div>
      <hr />
      {post?.body ? (
        <div className="prose-lg">
          <PortableText value={post?.body} components={components} />
        </div>
      ) : null}
      <Link href="/blog">&larr; Return to index</Link>
    </section>
  );
}
