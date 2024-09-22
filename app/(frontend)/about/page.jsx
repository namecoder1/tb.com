import { GoInfo } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
import profile from "@/assets/images/profile.jpg";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { client } from "@/sanity/lib/client";
import { INFO_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

export const metadata = {
  title: 'About',
  description: "Ciao mi chiamo Tobia Bartolomei, sono un Junior FrontEnd Web Developer, in questa pagina puoi trovare tutte le mie informazioni utili. Dagli un'occhiata!",
  openGraph: {
    title: 'About',
    description: "Ciao mi chiamo Tobia Bartolomei, sono un Junior FrontEnd Web Developer, in questa pagina puoi trovare tutte le mie informazioni utili. Dagli un'occhiata!",
    url: 'https://tob.codes/about'
  }
}

import figma from '@/assets/images/figma.png'
import vsc from '@/assets/images/vscode.png'
import illustrator from '@/assets/images/illustrator.png'

import { LuCode2 } from "react-icons/lu";
import { FaMapPin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { Button } from "@/components/ui/button";

const AboutPage = async () => {
  const info = await client.fetch(INFO_QUERY, {}, options);
  return (
    <section className="my-20 mx-10 lg:mx-20 2xl:mx-32 ">
      <h1 className="text-3xl font-semibold flex items-center">
        <GoInfo className="inline-block mr-2" />
        About Me
      </h1>
      <div className="flex flex-col 2xl:grid 2xl:grid-cols-6">
        <div className="col-span-2 flex-col flex gap-x-10">
          <div className="mt-10 flex flex-col items-start md:flex-row md:items-center justify-start gap-6">
            <Image
              src={profile}
              width={150}
              height={150}
              alt="Immagine di Tobia Bartolomei"
              className="w-auto h-full rounded-full"
            />
            <div className="mr-5 flex flex-col">
              <div className="flex flex-col">
                <h1 className="font-semibold text-2xl">Tobia Bartolomei</h1>
                <h2 className="underline underline-offset-2 font-medium text-lg">
                  @tobi
                </h2>
              </div>
              <hgroup className="flex flex-col gap-1 mt-3">
                <h3>
                  <LuCode2 className="inline-block text-xl mr-2" />
                  {info.jobTitle}
                </h3>
                <p>
                  <FaMapPin className="inline-block text-xl mr-2" />
                  Pesaro, PU, Italia
                </p>
              </hgroup>
            </div>
          </div>
          <div className="mt-10 2xl:mr-5 grid grid-cols-2 grid-rows-2 gap-y-2 max-w-sm 2xl:max-w-full items-center justify-center">
            <Link
              className="underline underline-offset-2 flex items-center justify-center 2xl:justify-start"
              href={info.social.insta.instaUrl}
              target="_blank"
            >
              <GrInstagram className="inline-block mr-2" />
              {info.social.insta.instaName}
            </Link>
            <Link
              className="underline underline-offset-2 flex items-center justify-center 2xl:justify-start"
              href={info.social.github.githubUrl}
              target="_blank"
            >
              <BsGithub className="inline-block mr-2" />
              {info.social.github.githubName}
            </Link>
            <Link
              className="underline underline-offset-2 flex items-center justify-center 2xl:justify-start"
              href={info.social.linkedin.linkedinUrl}
              target="_blank"
            >
              <GrLinkedin className="inline-block mr-2" />
              {info.social.linkedin.linkedinName}
            </Link>
            <Link
              className="underline underline-offset-2 flex items-center justify-center 2xl:justify-start"
              href={info.social.x.xUrl}
              target="_blank"
            >
              <BsTwitterX className="inline-block mr-2" />
              {info.social.x.xName}
            </Link>
          </div>
        </div>
        <div className="col-span-4 flex flex-col 2xl:flex-row mt-10 2xl:mt-0">
          <Separator
            orientation="vertical"
            className="h-full w-[1px] hidden 2xl:inline-block"
          />
          <Separator
            orientation="horizontal"
            className="h-[1px] w-full 2xl:hidden"
          />
          <div className="2xl:ml-5 mt-10 2xl:mt-0 flex flex-col gap-y-5">
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold">Mi presento..</h2>
              </CardHeader>
              <CardContent>
                <p>
                  Ciao, piacere, mi chiamo Tobia Bartolomei. Sono un{" "}
                  {info.jobTitle} appassionato del mondo tech e del digitale.
                  Fin da piccolino ho sviluppato una forte curiosità verso i
                  computer tanto da passarci interi pomeriggi, modificando
                  impostazioni e addentrandomi sempre più a fondo (spesso
                  combinando problemi).
                  <br />
                  <br />
                  Verso i 17 anni ho deciso di scoprire il mondo dello sviluppo
                  web, ma con un approccio più semplice e meno approfondito,
                  usando WordPress e la creazione a blocchi tramite Elementor.
                  Ho continuato questa strada finchè non ho sentito il bisogno
                  di capirci di più e di personalizzare ancora più a fondo le
                  mie creazioni.
                  <br />
                  <br />
                  Ho incominciato a studiare la vera programmazione a Gennaio
                  del 2024 partendo dalle basi di HTML e CSS. Sono molto curioso
                  e motivato nell'approccio a questo mondo, mi piace studiare il
                  funzionamento delle cose 'sotto il cofano' per capirle davvero
                  appieno. Mi piace creare UI minimal e moderne, aiutare
                  l'utente guidandolo attraverso la navigazione dentro al sito e
                  do una particolare importanza alla cura dei dettagli.
                </p>
              </CardContent>
              <CardFooter>
                <Button size='sm'>
                  <Link href="/contact">Contattami</Link>
                </Button>
              </CardFooter>
            </Card>
						<Card>
							<CardHeader>
								<h2 className="text-xl font-semibold">Softwares</h2>
							</CardHeader>
							<CardContent className='xl:grid xl:grid-cols-3 flex flex-col gap-y-6 xl:gap-y-0 gap-x-5'>
								<Card className='border-none'>
									<CardHeader className='px-0 pt-0 pb-3'>
										<Image src={vsc} width={50} height={50} />
										<h2 className="text-xl font-semibold">Visual Studio Code</h2>	
									</CardHeader>
									<CardContent className='p-0'>
										Il mio software preferito in assoluto. Completamente personalizzabile, supporta quasi tutti i linguaggi ed è veloce e utile in fase di debug.
									</CardContent>
								</Card>
								<Card className='border-none'>
									<CardHeader className='px-0 pt-0 pb-3'>
										<Image src={illustrator} width={50} height={50} />
										<h2 className="text-xl font-semibold">Adobe Illustrator</h2>
									</CardHeader>
									<CardContent className='p-0'>
										Come non amare Illustrator..se devo creare un logo o un'illustrazione faccio riferimento su di lui. È il più complesso tra i 3 software e devo ancora prenderci la mano.
									</CardContent>
								</Card>
								<Card className='border-none'>
									<CardHeader className='px-0 pt-0 pb-3'>
										<Image src={figma} width={50} height={50} />
										<h2 className="text-xl font-semibold">Figma</h2>
									</CardHeader>
									<CardContent className='p-0'>
										Figma è il mio strumento preferito nella fase di creazione del sito, mi aiuta a dare un bel vestito all'idea ed è davvero semplice e intuitivo da usare.
									</CardContent>
								</Card>
							</CardContent>
						</Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
