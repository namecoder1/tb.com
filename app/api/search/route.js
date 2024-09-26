import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET(request) {
	const { searchParams } = new URL(request.url);
	const query =  searchParams.get('q');

	if (!query) {
		return NextResponse.json([]);
	}

	const searchQuery = `
	*[_type == 'post' && title match $query && slug.current match $query] {
		'id': _id,
		_updatedAt,
		title,
		'slug':slug.current,
		description,
		"altText": mainImage.alt,
		'image' : mainImage.asset -> url,
		'author': author -> name,
		'categories': categories[] -> {title, 'slug': slug.current},
		"readTime": round(length(pt::text(body)) / 5 / 180 )
	} 
	`;


  const params = { query: `${query}*` };
  try {
    const results = await client.fetch(searchQuery, params);
    return NextResponse.json(results);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json([]); // Return an empty array on error to prevent breaking the frontend.
  }
} 