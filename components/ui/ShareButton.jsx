'use client'

import { FaRegShareFromSquare } from "react-icons/fa6";
import { Button } from "./button";
import { RWebShare } from "react-web-share";
 
const ShareButton = ({ title, text, url }) => {
	 return (
		<RWebShare data={{ text: text, title: title, url: url }} className='bg-gra-500'>
			<Button size='md'><FaRegShareFromSquare className="inline-block mr-2 text-lg" />Share</Button>
		</RWebShare>
	 );
 };
 
 export default ShareButton;