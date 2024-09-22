import Image from "next/image";
import { Card } from "./card";
import { Button } from "./button";
import Link from "next/link";

const Container = ({
	children,
	className = ""
}) => {
	return (
		<div className={`max-w-[350px] max-h-[350px] w-[350px] h-[350px] border-[1px] border-black/20 dark:border-none rounded-xl p-2 ${className}`}>
			{children}
		</div>
	);
};

export default Container;