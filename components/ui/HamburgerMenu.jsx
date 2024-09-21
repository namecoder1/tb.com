'use client'

import { useClickAway } from "react-use";
import Link from "next/link";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Divide as Hamburger } from "hamburger-react";

import { TbHome } from "react-icons/tb";
import { GoInfo } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { GrArticle } from "react-icons/gr";
import { GrContact } from "react-icons/gr";

export const HamburgerMenu = () => {
	const routes = [
    { title: "Home", href: "/", Icon: TbHome },
    { title: "About", href: "/about", Icon: GoInfo },
    { title: "Projects", href: "/projects", Icon: GrProjects },
    { title: "Blog", href: "/blog", Icon: GrArticle },
    { title: "Contact", href: "/contact", Icon: GrContact },
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
            className="fixed z-10 left-[50%] w-fit top-[4.5rem] p-5 pt-0 bg-transparent-950 "
          >
            <ul className="grid gap-2">
              {routes.map((route, idx) => {
                const  { Icon } = route;

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
                        "flex text-white gap-2 items-center justify-center w-full px-5 py-2 rounded-xl bg-primary"
                      }
                      href={route.href}
                    >
                     <Icon /> <span className="flex gap-1 text-center">{route.title}</span>
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