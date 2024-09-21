import Link from "next/link";
import Image from "next/image";

const WakaTime = ({ image, url, width = '200', height = '50' }) => {
	return (
		<Link href={url} target={"_blank"} className="mt-1"><Image src={image} width={width} height={height} alt="wakatime" /></Link>
	);
};

export default WakaTime;