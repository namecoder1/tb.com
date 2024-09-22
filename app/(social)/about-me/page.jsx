import Image from "next/image";
import logo from '@/assets/images/logo-mini.png'
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Card, CardContent, CardDescription, CardHeader, CardFooter } from "@/components/ui/card";
import SocialCard from "@/components/ui/SocialCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ImageCard from "@/components/ui/ImageCard";

const SocialPage = () => {
	return (
    <section className="py-20 px-10 lg:px-20 2xl:px-32 text-white">
      <div className="flex flex-col xl:grid xl:grid-cols-8">
        <div className="col-span-2 flex-col flex gap-x-1 xl:max-w-sm max-w-full  px-5">
          <div className="mt-10 flex flex-col items-start justify-start gap-6">
            <Image
              src={logo}
              width={150}
              height={150}
              alt="Immagine di Tobia Bartolomei"
              className="w-auto h-full rounded-full"
            />
            <div className="mr-5 flex flex-col">
              <div className="flex flex-col">
                <h1 className="font-semibold text-xl">Tobia Bartolomei</h1>
								<hgroup className="flex flex-col mt-1">
									<h2 className="font-medium text-lg">🇮🇹 Pesaro, Italy</h2>
									<h2 className="font-medium text-lg">🛠️ Junior FrontEnd Web Dev</h2>
								</hgroup>
              </div>
              fdbe2uio
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
          <div className="xl:ml-5 mt-10 xl:mt-0 flex flex-col gap-y-5">
						<ImageCard 
							image={logo} 
							link='/'
							title='New Site'
							subtitle='New SaaS Released'
							description='bcewhiif ch ewuihciowh cewhcueowh hues ofhwuoch uwigvch w h hnoi hoiy nuhi oyo '
						/>
          </div>
        </div>
      </div>
    </section>
	);
};

export default SocialPage;