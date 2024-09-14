'use client'

import { useClickAway } from "react-use";
import Link from "next/link";
import { Button } from "./button";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Divide as Hamburger } from "hamburger-react";

export const HamburgerMenu = () => {
	const routes = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Blog", href: "/blog" },
	];
  const getTime = () => {
		const options = {
			timeZone: 'Europe/Rome',
			hour: '2-digit',
			minute: '2-digit',
			hour12: false
		};
	
		const formatter = new Intl.DateTimeFormat('it-IT', options);
		const currentTime = formatter.format(new Date());
	
		return currentTime;
	};
	
	const time = getTime();
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="lg:hidden">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed z-10 left-3/3 w-1/2 right-0 top-[4.5rem] p-5 pt-0 bg-transparent 950 border-b border-b-white/20"
          >
            <div className='flex flex-col justify-center items-center gap-y-2 mb-2 w-full'>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 ,
                  }}
                  className="flex w-full bg-gray-100 border-[1px] border-slate-400 rounded-xl py-2 px-4"
                  >
                    <p className='font-normal'>Pesaro: <span className='font-medium ml-1'>{time}</span></p>
                  </motion.div>
                  <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 ,
                  }}
                  className='w-full'
                  >
                  <Button className='h-full w-full border-[1px] border-slate-400 bg-gray-100 rounded-xl py-2 px-4' size='xs' variant='outline' ><Link href='/contact'>Contact</Link></Button>
                </motion.div>
            </div>
            <ul className="grid gap-2">
              {routes.map((route, idx) => {
                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.title}
                    className="w-full p-[0.06rem] rounded-xl bg-slate-400"
                  >
                    <Link
                      onClick={() => setOpen((prev) => !prev)}
                      className={
                        "flex text-black items-center justify-between w-full px-5 py-2 rounded-xl bg-gray-100"
                      }
                      href={route.href}
                    >
                      <span className="flex gap-1 ">{route.title}</span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};