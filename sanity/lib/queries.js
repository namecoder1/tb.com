import {defineQuery} from 'next-sanity'

export const POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id,
  _updatedAt,
  title,
  slug,
  description,
  "altText": mainImage.alt,
  'image' : mainImage.asset -> url,
  'author': author -> name,
  'categories': categories[] -> {title, 'slug': slug.current},
}`)

export const POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  _updatedAt,
  title,
  body,
  "altText": mainImage.alt,
  'image' : mainImage.asset -> url,
  'author': author -> {
    name, 
    "slug": slug.current,
    "image": image.asset -> url,
    bio
  },
  'categories': categories[] -> {title, 'slug': slug.current, _id},
}`)

export const CATEGORIES_QUERY =defineQuery(`*[_type == "category" && slug.current == $categorySlug][0]{
  title,
  "posts": *[_type == "post" && references(^._id)]{
  _id,
  _updatedAt,
  title,
  slug,
  description,
  "altText": mainImage.alt,
  'image' : mainImage.asset -> url,
  'author': author -> name,
  'categories': categories[] -> {title, 'slug': slug.current},
    }
  }`)

export const LASTPOSTS_QUERY = defineQuery(`*[_type == "post"][0...2] | order(_createdAt desc){
  _id,
  _updatedAt,
  title,
  slug,
  description,
  "altText": mainImage.alt,
  'image' : mainImage.asset -> url,
  'author': author -> name,
  'categories': categories[] -> {title, 'slug': slug.current, _id},
  }`)

export const FRAMEWORKS_QUERY = defineQuery(`*[_type == 'skill' && list == 'Frameworks' ] {
    _id,
    'image': mainImage.asset -> url,
    'imageAlt': mainImage.alt,
    title,
    list
}`)
export const LANGUAGES_QUERY = defineQuery(`*[_type == 'skill' && list == 'Languages' ] {
    _id,
    'image': mainImage.asset -> url,
    'imageAlt': mainImage.alt,
    title,
    list
}`)
export const TOOLS_QUERY = defineQuery(`*[_type == 'skill' && list == 'Tools' ] {
    _id,
    'image': mainImage.asset -> url,
    'imageAlt': mainImage.alt,
    title,
    list
}`)