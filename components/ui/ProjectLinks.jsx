import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { FaGithub } from 'react-icons/fa'
import { FaExternalLinkAlt } from "react-icons/fa";
import { Button } from "./button";
import Link from "next/link";

const ProjectLinks = ({ githubUrl, url, }) => {
	return (
		<div className="flex gap-1 items-center">
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button size='icon' name="Github Repository" asChild><Link href={githubUrl} target={"_blank"}><FaGithub className="inline-block text-lg" /></Link></Button>									
				</TooltipTrigger>
				<TooltipContent>
					<p>View GitHub Repo</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button size='icon' name="Site Url" asChild><Link href={url} target={"_blank"}><FaExternalLinkAlt className="inline-block text-lg" /></Link></Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>View Live Site</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	</div>
	);
};

export default ProjectLinks;