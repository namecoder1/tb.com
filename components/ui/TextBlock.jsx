import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import {PortableText} from '@portabletext/react';
import { FaDotCircle } from "react-icons/fa";
import Link from "next/link";

const imageComponent = (props) => 
  props.value? (
    <Image
      className="rounded-lg not-prose w-full h-auto"
      src={urlFor(props.value)
        .width(600)
        .height(400)
        .quality(80)
        .auto("format")
        .url()}
      alt={props?.value?.alt || ""}
      width="600"
      height="400"
    />
  ) : null;


const components = {
  block: {
    h1: ({children}) => <h1 className="text-3xl font-semibold">{children}</h1>,
  },
  list: {
    bullet: ({children}) => <ul className="mt-xl">{children}</ul>
  },
  listItem: {
    bullet: ({children}) => <li><FaDotCircle className="inline-block text-lg mr-1" />{children}</li>
  },
  types: {
    image: imageComponent
  },
  marks: {
    link: ({value, children}) => {
      return (
        <Link href={value?.href} target="_blank" className="underline underline-offset-2">{children}</Link>
      )
    },
    postLink: ({value, children}) => {

      return (
        <Link href={value} className="underline">{children}</Link>
      )
    },
    projectLink: ({value, children}) => {
      const href = value?.post?.markDefs?.slug || "#";
      console.log(href)
      return (
        <Link href={value} className="underline">{children}</Link>
      )
    }
  },
};

const TextBlock = (props) => {
  return <PortableText value={props.value} components={components} />
}

export default TextBlock;