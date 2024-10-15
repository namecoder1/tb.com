import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import Project from "@/components/ui/Project";
import { GrProjects } from "react-icons/gr";	


export const metadata = {
	title: 'Projects',
	description: 'QUesta è la pagina dove sono elencati tutti i progetti a cui ho preso parte, sia come sviluppatore principale che come aiuto esterno.',
	openGraph: {
    title: 'Projects',
    description: 'Questa è la pagina dove sono elencati tutti i progetti a cui ho preso parte, sia come sviluppatore principale che come aiuto esterno.',
    url: 'https://tob.codes/projects'
  }
}

const options = { next: { revalidate: 60 } };

const ProjectsPage = async () => {
	const projects = await client.fetch(PROJECTS_QUERY, {}, options);
	return (
		<section className="my-20 mx-10 lg:mx-20 2xl:mx-32">
			<h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl mb-3 flex items-center"><GrProjects className="inline-block mr-2" /> Projects</h1>
			<ul className="grid gri-cols-1 grid-rows my-20 lg:grid-cols-2 gap-x-10 gap-y-14 items-center">
				{projects.map((project) => {
					return (
						<Project 
							id={project.id}
							title={project.title}
							url={project.url}
							githubUrl={project.githubUrl}
							image={project.image}
							wakaImage={project.wakaImage}
							wakaUrl={project.wakaUrl}
							type={project.type}
							slug={project.slug}
							imageAlt={project.imageAlt}
						/>
					)
				})}
			</ul>
		</section>
	);
};

export default ProjectsPage;