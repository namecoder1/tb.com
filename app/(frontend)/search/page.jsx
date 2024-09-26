'use client'

import Spinner from '@/components/ui/Spinner'
import PostCard from '@/components/ui/PostCard';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SearchResults() {
  const [query, setQuery] = useState(''); // Stato per memorizzare il parametro di ricerca

  useEffect(() => {
      // useEffect verrà eseguito solo nel browser, non durante il rendering sul server
      const searchParams = useSearchParams(); // Ottieni i parametri di ricerca
      const q = searchParams.get('query'); // Prendi il parametro "query" dalla URL
      setQuery(q); // Memorizza il valore di "query" nello stato
  }, []); // L'array vuoto [] significa che useEffect verrà eseguito solo al caricamento della pagina


  return (
    <Suspense>
      <div className='my-20 mx-10 lg:mx-20 2xl:mx-32 '>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold mb-10'>Risultati per: "{query}"</h1>
        {loading ? (
          <div className='h-[100vh] flex flex-col items-center justify-center'>
            <Spinner />
          </div>
        ) : results.length > 0 ? (
          <ul className='flex flex-col md:grid md:grid-cols-2 xl:grid xl:grid-cols-3 my-20 gap-10'>
            {results.map((result) => (
              <li key={result.id}>
                <PostCard 
                  slug={result.slug} 
                  title={result.title}
                  image={result.image}
                  altText={result.altText} 
                  description={result.description}
                  id={result.id}
                  categories={result.categories}
                  readTime={result.readTime}
                  date={result._updatedAt}
                />            
              </li>
            ))}
          </ul>
        ) : (
          <div className='h-[100vh] flex flex-col items-center justify-center'>
            <p className='text-xl md:text-2xl font-medium'>Nessun risultato trovato</p>
          </div>
        )}
      </div>
    </Suspense>
  );
}
