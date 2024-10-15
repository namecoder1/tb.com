import Image from "next/image";
import { Card } from "./card";
import { Button } from "./button";
import Link from "next/link";

const Container = ({
	children,
	className = "",
	link
}) => {
	return (

		<Card className={`w-60 h-60 bg-transparent ${className}`}>
			{link ? <Link target="_blank" href={link}>
				{children}
			</Link> : {children}}
		</Card>
	);
};

export default Container;