'use client'
import { useEffect, useState } from 'react';
import { FaRegArrowAltCircleUp } from "react-icons/fa"

const Upper = () => {
	const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

	return (
		<div onClick={scrollToTop} className="cursor-pointer fixed z-10 bottom-4 right-4 bg-yellow-400 rounded-full p-1">
			<FaRegArrowAltCircleUp className="text-3xl text-black" />
		</div>
	);
};

export default Upper;