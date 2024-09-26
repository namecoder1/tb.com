import Image from "next/image";
import { Card } from "./card";
import { Button } from "./button";
import Link from "next/link";

const Container = ({
	children,
	className = ""
}) => {
	return (
		<Card className={`w-60 h-60 bg-transparent ${className}`}>
			{children}
		</Card>
	);
};

export default Container;