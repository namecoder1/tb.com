'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim()) {
      const res = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
      const results = await res.json();
      console.log(results); // Gestisci i risultati come preferisci
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        id="search-input"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cerca..."
        onKeyDown={(e) => {
          if (e.ctrlKey && e.key === 'k') { // Scorciatoia Ctrl + K
            e.preventDefault();
            document.getElementById('search-input').focus();
          }
        }}
      />
      <button type="submit">Cerca</button>
    </form>
  );
};

export default SearchBar;
