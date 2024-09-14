import { client } from '@/sanity/lib/client'
import { POST_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import Link from 'next/link'

const options = { next: { revalidate: 60 } }

export default async function Page({ params }) {
  const post = await client.fetch(POST_QUERY, params, options)

	console.log(post.author)
  if (!post) {
    notFound()
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <h1 className="text-4xl font-bold text-balance">{post?.title}</h1>
      <hr />
      <Link href="/blog">&larr; Return to index</Link>
    </main>
  );
}
