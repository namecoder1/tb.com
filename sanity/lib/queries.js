import {defineQuery} from 'next-sanity'

export const POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  'id': _id,
  _updatedAt,
  title,
  slug,
  description,
  "altText": mainImage.alt,
  'image' : mainImage.asset -> url,
  'author': author -> name,
  'categories': categories[] -> {title, 'slug': slug.current},
  "readTime": round(length(pt::text(body)) / 5 / 180 )
}`)

export const POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  _updatedAt,
  title,
  "href": slug.current,
  'body': body[],
  'post': body[]{markDefs[]{
  'slug': referencePost -> {'slug': slug.current},
  }},
  'project': body[]{markDefs[]{
  'slug': referenceProject -> {'slug': slug.current},
  }},
  "altText": mainImage.alt,
  'image' : mainImage.asset -> url,
  'author': author -> {
    name, 
    "slug": slug.current,
    "image": image.asset -> url,
    bio
  },
  'categories': categories[] -> {title, 'slug': slug.current, 'id': _id},
  "readTime": round(length(pt::text(body)) / 5 / 180 )
}`)

export const ALLCATEGORIES_QUERY = defineQuery(`*[_type == 'category']{
  title,
  'slug': slug.current,
  'id': _id,
  }`)

export const CATEGORIES_QUERY = defineQuery(`*[_type == "category" && slug.current == $categorySlug][0]{
  title,
  'slug': slug.current,
  'id': _id,
  "posts": *[_type == "post" && references(^._id)]{
  'id': _id,
  _updatedAt,
  title,
  'slug': slug.current,
  description,
  "altText": mainImage.alt,
  'image' : mainImage.asset -> url,
  'author': author -> name,
  'categories': categories[] -> {title, 'slug': slug.current, 'id': _id},
    }
  }`)

export const LASTPOSTS_QUERY = defineQuery(`*[_type == "post"][0...2] | order(_createdAt desc){
  'id': _id,
  _updatedAt,
  title,
  slug,
  description,
  "altText": mainImage.alt,
  'image' : mainImage.asset -> url,
  'author': author -> name,
  'categories': categories[] -> {title, 'slug': slug.current, 'id': _id},
  "readTime": round(length(pt::text(body)) / 5 / 180 )
}`)

export const PROJECTS_QUERY = defineQuery(`*[_type == 'project']{
  'id': _id,
  title,
  'slug': slug.current,
  url,
  githubUrl,
  publishedAt,
  'image': image.asset -> url,
  'imageAlt': image.alt,
  "wakaImage": wakaLinks.wakaImage,
  "wakaUrl": wakaLinks.wakaUrl,
  type
}`)

export const PROJECT_QUERY = defineQuery(`*[_type == 'project' && slug.current == $slug][0]{
  'id': _id,
  title,
  'slug': slug.current,
  url,
  githubUrl,
  publishedAt,
  description,
  technologies[] -> {
    title,
    'id': _id, 
    'image': mainImage.asset -> url,
    'imageAlt': mainImage.alt,
    description,
    link
  },  
  body[],
  'image': image.asset -> url,
  'imageAlt': image.alt,
  "wakaImage": wakaLinks.wakaImage,
  "wakaUrl": wakaLinks.wakaUrl,
  type
}`)

export const LASTPROJECT_QUERY = defineQuery(`*[_type == "project"] | order(_createdAt asc) [0] {
  'id': _id,
  title,
  'slug': slug.current,
  url,
  githubUrl,
  publishedAt,
  description,
  technologies[] -> {
    title,
    'id': _id, 
    'image': mainImage.asset -> url,
    description,
    link
  },  
  'image': image.asset -> url,
  'imageAlt': image.alt,
  "wakaImage": wakaLinks.wakaImage,
  "wakaUrl": wakaLinks.wakaUrl,
  type
}`)

export const FRAMEWORKS_QUERY = defineQuery(`*[_type == 'skill' && list == 'Frameworks' ] {
    'id': _id,
    'image': mainImage.asset -> url,
    'imageAlt': mainImage.alt,
    title,
    list
}`)
export const LANGUAGES_QUERY = defineQuery(`*[_type == 'skill' && list == 'Languages' ] {
    'id': _id,
    'image': mainImage.asset -> url,
    'imageAlt': mainImage.alt,
    title,
    list
}`)
export const TOOLS_QUERY = defineQuery(`*[_type == 'skill' && list == 'Tools' ] {
    'id': _id,
    'image': mainImage.asset -> url,
    'imageAlt': mainImage.alt,
    title,
    list
}`)

export const INFO_QUERY = defineQuery(`*[_type == 'info'] [0] {
  jobTitle,
  'utils': utilsLink,
  'social': socialLinks
  }`)