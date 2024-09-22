import { PROJECT_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import Image from "next/image";
import WakaTime from "@/components/ui/WakaTime";
import TextBlock from '@/components/ui/TextBlock'
import Technologies from "@/components/ui/Technologies";
import ShareButton from "@/components/ui/ShareButton";
import { Button } from "@/components/ui/button";
import ProjectLinks from "@/components/ui/ProjectLinks";
import ProgressBar from "@/components/ui/ProgessBar";
import Link from "next/link";

const options = { next: { revalidate: 60 } };

export async function generateMetadata({ params }) {
  const project = await client.fetch(PROJECT_QUERY, { slug: params.slug });
  if (!project) {
    return { title: 'Progetto Non Trovato' };
  }
  return {
    title: project.title || 'Nuovo Progetto', 
		description: project.seoDescription || 'Progetto Senza Descrizione',
		openGraph: {
			title: project.title || 'Nuovo Progetto',
      description: project.seoDescription || 'Progetto Senza Descrizione',
      type: 'website',
      locale: 'it_IT',
      url: `https://tob.codes/projects/${project.slug}`,
      site_name: 'Tobia Bartolomei',
      images: [
        {
          url: project.image,
          alt: project.imageAlt,
          width: 500,
          height: 200,
        },
      ],
		}
  };
}

export default async function ProjectPage({ params }) {
	const project = await client.fetch(PROJECT_QUERY, params, options);
	if (!project) {
		notFound()
	}
	return (
		<section className="my-20 mx-10 lg:mx-20 2xl:mx-32">
      <ProgressBar />
			<div className="flex flex-col justify-start items-start lg:flex-row lg:justify-between lg:items-center mb-4">
				<hgroup className="mb-2">
					<h1 className="font-semibold text-5xl mb-1">{project.title}</h1>
					<h2 className="font-light text-2xl">{project.type} | {project.publishedAt}</h2>
				</hgroup>
				<WakaTime image={project.wakaImage} url={project.wakaUrl} />
			</div>
			<Image src={project.image} alt={project.imageAlt} width={500} height={200} className="w-full h-full rounded-xl" />
			<div className="mt-5">
				<div className="flex gap-1 items-center mb-8">
					<ProjectLinks 
						githubUrl={project.githubUrl}
						url={project.url}
					/> 
					<ShareButton title={project.title} text={project.description} url={project.slug} />
				</div>
				{project?.body ? (
        <div className="prose-lg">
					<h1 className="font-semibold text-4xl">Descrizione</h1>
          <TextBlock value={project?.body}  />
        </div>
      ) : null}
			</div>
			<div className="mt-10">
				<div className="flex gap-5 items-center justify-start flex-wrap">
					{project.technologies.map((technology) => {
						return (
							<Technologies 
								technology={technology.title}
								id={technology.id}
								image={technology.image}
								imageAlt={technology.imageAlt}
								description={technology.description}
								link={technology?.link}
							/>
						)
					})}
				</div>
			</div>
			<Button asChild className='my-20 max-w-sm flex mx-auto'><Link href='/projects'>Torna indietro</Link></Button>
		</section> 
	)
}