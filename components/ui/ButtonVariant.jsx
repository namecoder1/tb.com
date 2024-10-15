import Link from "next/link";

const ButtonVariant = ({
	href,
	icon,
	text = {
		textColor,
		textBody
	},
	textInnerShadow,
	textDropShadow,
	buttonFill,
	buttonStroke,
	dropShadow,
	innerShadow,

}) => {
	return (
		<Link href={href} className={`px-3 py-1 rounded-md flex gap-2 items-center justify-center w-fit ${buttonFill} ${buttonStroke} ${dropShadow} ${innerShadow} ...`}>
			{icon ? (
				<>
				{icon} <p className={`${textInnerShadow} ${textDropShadow} ${text.textColor}`}>{text.textBody}</p>
				</>
			) : (
				<p className={`${textInnerShadow} ${textDropShadow} ${text.textColor}`}>{text.textBody}</p>
			)}
		</Link>
	);
};

export default ButtonVariant;