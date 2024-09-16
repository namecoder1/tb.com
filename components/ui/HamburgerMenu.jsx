'use client'

import { useClickAway } from "react-use";
import Link from "next/link";
import { Button } from "./button";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Divide as Hamburger } from "hamburger-react";
import Clock from "./Clock";

export const HamburgerMenu = () => {
	const routes = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Blog", href: "/blog" },
	];
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
            className="fixed z-10 left-3/3 w-2/5 sm:w-1/3 right-0 top-[4.5rem] p-5 pt-0 bg-transparent 950 border-b border-b-white/20"
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
                  className='h-full w-full border-[1px] bg-primary border-slate-400 text-white rounded-xl py-2 px-4'
                  >
                  <Link href='/contact'  size='lg' >Contact</Link>
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
                    className="w-full p-[0.06rem] rounded-xl bg-primary/80"
                  >
                    <Link
                      onClick={() => setOpen((prev) => !prev)}
                      className={
                        "flex text-white items-center justify-between w-full px-5 py-2 rounded-xl bg-primary"
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