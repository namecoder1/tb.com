// components/SearchBar.js
'use client'; // Required to use hooks like useState and useRouter in the app directory.

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from './button';

export default function SearchBar({ className, button = false }) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className={className}>
      <input
        type="text"
        placeholder="Cerca.."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded w-full"
      />
      {button && (
        <Button type='submit'>Vai</Button>
      )}
    </form>
  );
}
