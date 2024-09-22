import Image from "next/image";
import logo from '@/assets/images/logo-mini.png'
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Card, CardContent, CardDescription, CardHeader, CardFooter } from "@/components/ui/card";
import SocialCard from "@/components/ui/SocialCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Container from "@/components/ui/Container";

import { SiInstagram } from "react-icons/si";
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
      <div className="flex flex-col xl:grid xl:grid-cols-8">
        <div className="col-span-2 flex-col flex gap-x-1 xl:max-w-sm max-w-full  px-5">
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
                <h1 className="font-semibold text-xl">Tobia Bartolomei</h1>
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
        <div className="col-span-6 flex flex-col xl:flex-row mt-10 xl:mt-0">
          <Separator
            orientation="vertical"
            className="h-full w-[1px] hidden xl:inline-block"
          />
          <Separator
            orientation="horizontal"
            className="h-[1px] w-full xl:hidden"
          />
          <div className="xl:ml-5 mt-10 xl:mt-0 gap-5 flex flex-col max-w-6xl">
            <div className="flex flex-col md:grid md:grid-cols-3 gap-5">
              <Container className="relative">
                <Image src={logo}  layout="fill" objectFit="cover" className="rounded-xl z-0" />
                <div className="relative z-10">
                  <h1 className="text-black mt-2 ml-3 font-bold text-2xl">New Logo</h1>
                </div>
              </Container>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-3 gap-5">

            </div>
          </div>
        </div>
      </div>
    </section>
	);
};

export default SocialPage;