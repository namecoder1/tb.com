import { LASTPROJECT_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import Project from "./ui/Project";

import Technologies from "./ui/Technologies";

const options = { next: { revalidate: 60 } };

const LatestProject = async () => {
	const latestProject = await client.fetch(LASTPROJECT_QUERY, {}, options);
	return (
		<section className="flex flex-col my-32 mx-10 lg:mx-20 2xl:mx-32">
			<h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl mb-3">Latest Project</h1>
			<div className="flex flex-col xl:grid xl:grid-cols-3 gap-x-10 gap-y-5 items-start w-auto">
				<div className="w-full">
					<Project 
					id={latestProject.id}
					slug={latestProject.slug}
					title={latestProject.title}
					url={latestProject.url}
					githubUrl={latestProject.githubUrl}
					image={latestProject.image}
					imageAlt={latestProject.imageAlt}
					wakaImage={latestProject.wakaImage}
					wakaUrl={latestProject.wakaUrl}
					type={latestProject.type}
					/>	
				</div>
				<div className="w-xl lg:mt-10 xl:col-span-2">
					<p>{latestProject.description}</p>
					<div className="hidden 2xl:flex flex-col w-fit items-start py-3 px-4 rounded-xl bg-slate-700/20 dark:bg-zinc-800 justify-start  mt-10">
							<h1 className="mb-3 font-semibold text-xl">Tech Stack</h1>
							<div className="flex gap-2 items-center justify-start flex-wrap">
								{latestProject.technologies.map((technology) => {
									return (
										<Technologies
											technology={technology.title}
											id={technology.id}
											image={technology.image}
											imageAlt={technology.imageAlt}
											description={technology.description}
											link={technology?.link}
										/>
									);
								})}
							</div>
						</div>
				</div>
			</div>
		</section>
	);
};

export default LatestProject;