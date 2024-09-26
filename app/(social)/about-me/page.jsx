import Image from "next/image";
import SocialCard from "@/components/ui/SocialCard";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Container from "@/components/ui/Container";

import instagram from '@/assets/images/instagram.png'
import linkedin from '@/assets/images/linkedin.png'
import github from '@/assets/images/github.png'
import logo from '@/assets/images/logo-mini.png'


import { FaPlus } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { ThemeToggle } from "@/components/ui/ThemeToggle";


const SocialPage = () => {
  const currentYear = new Date().getFullYear();
  let currentAge = currentYear - 2004;
	return (
    <section className="py-20 px-10 lg:px-20 2xl:px-32 text-black dark:text-white">
      <div className="absolute left-5 top-5">
        <ThemeToggle />
      </div>
      <div className="flex flex-col xl:grid xl:grid-cols-2">
        <div className="flex-col flex gap-x-1 xl:max-w-sm max-w-full xl:pl-0 px-5">
          <div className="mt-10 flex flex-col items-start justify-start gap-6">
            <Image
              src={logo}
              width={150}
              height={150}
              alt="Immagine di Tobia Bartolomei"
              className="w-auto h-full rounded-full border-[1px] border-black/20 dark:border-none"
            />
            <div className="mr-5 flex flex-col">
              <div className="flex flex-col mb-4">
                <h1 className="font-semibold text-5xl">Tobia Bartolomei</h1>
								<hgroup className="flex flex-col mt-1">
									<h2 className="font-medium text-lg">🇮🇹 Pesaro, Italy</h2>
									<h2 className="font-medium text-lg">🛠️ Junior FrontEnd Web Dev</h2>
								</hgroup>
              </div>
              <ul className="flex gap-4 mt-3">
                <li><RiNextjsFill className="inline-block text-2xl" /></li>
                <li><FaReact className="inline-block text-2xl" /></li>
                <li><RiTailwindCssFill className="inline-block text-2xl" /></li>
              </ul>
              <p className="mt-4">Ciao, sono Tobia Bartolomei, ho {currentAge} anni e sono un Web Developer. Mi piace scoprire e imparare sempre nuove cose e adoro personalizzare qualsiasi cosa io abbia tra le mani.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row mt-10 xl:mt-0">
          <Separator
            orientation="horizontal"
            className="h-[1px] w-full xl:hidden"
          />
          <div className="xl:ml-5 mt-10 xl:mt-0 gap-5 flex flex-col w-full">
            <div className="flex gap-5">
              <Container className="flex flex-col items-between justify-between h-fit gap-10 p-5 w-full">
                <Image src={instagram} height={70} width={70} />
                <p className="mt-4">@tobia.bartolomei</p>

              </Container>
              <Container className="flex flex-col items-between justify-between h-fit gap-10 p-5">
                <Image src={linkedin} height={70} width={70} />
                <p className="mt-4">Tobia Bartolomei</p>

              </Container>
            </div>
            <div className="flex">
            <iframe className="rounded-xl" src="https://my.atlist.com/map/7b37a929-bbdc-4a5d-a86d-15d50e644a24/?share=true" allow="geolocation 'self' https://my.atlist.com" width="100%" height="400px" loading="lazy" frameborder="0" scrolling="no" allowfullscreen id="atlist-embed"></iframe>


            </div>
            <div>
            <Container className="flex flex-col items-between justify-between p-5 w-full">
                <Image src={github} height={70} width={70} />
                <p className="mt-4">Check out my GitHub profile! </p>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </section>
	);
};

export default SocialPage;