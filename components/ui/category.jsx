import Link from "next/link";

const Category = ({ slug, title, id }) => {
	return (
		<li key={id} className="inline-block mr-2 text-sm bg-gray-300 py-1 px-2">
			<Link href={`/blog/${slug}`}>{title}</Link>
		</li>
	)
};

export default Category;