import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { FaArrowRight } from "react-icons/fa";
import WakaTime from "./WakaTime";
import ProjectLinks from "./ProjectLinks";


const Project = ({
	id,
	title,
	slug,
  url,
  githubUrl,
  image,
	imageAlt,
	wakaImage, 
	wakaUrl,
	type
}) => {
	return (
		<article key={id} className="flex flex-col gap-10 my-5 max-w-8xl">
			<div>
				<Image src={image} alt={imageAlt} sizes="(max-width: 768px) 100vw, 33vw" width={700} height={200} className="w-full rounded-xl" />
				<div className="flex items-center justify-between">
					<div className="flex flex-col items-start justify-center">
						<h1 className="font-semibold md:text-xl mt-2">{title}</h1>
						<h2 className="font-light text-sm md:text-lg">{type}</h2>
						<WakaTime image={wakaImage} url={wakaUrl} />
					</div>
					<ProjectLinks 
						githubUrl={githubUrl}
						url={url}
					/> 
				</div>
					<Button size='sm' name="Site Url" asChild className='mt-3 w-full'><Link href={`/projects/${slug}`}>Leggi di più<FaArrowRight className="inline-block text-lg ml-2" /></Link></Button>
			</div>
		</article>
	);
};

export default Project;