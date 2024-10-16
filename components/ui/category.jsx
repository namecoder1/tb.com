import Link from "next/link";

const Category = ({ slug, title, id }) => {
	return (
		<li key={id} className="inline-block mr-2 text-sm border-gray-300 border-[1px] rounded-md dark:border-zinc-700 py-1 px-[10px]">
			<Link href={`/blog/${slug}`}>{title}</Link>
		</li>
	)
};

export default Category;