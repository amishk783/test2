"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface HeaderProps {
  className?: string;
  logo: string;
  navLinks: {
    text: string;
    link: string;
  }[];
  buttonText: string;
}

export const Header: React.FC<HeaderProps> = ({
  logo,
  navLinks,
  buttonText,
  className,
}) => {
  console.log("🚀 ~ className:", className)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  return (
    <motion.div className="flex items-center justify-between px-2 py-2 bg-black gap-10 z-50 sticky top-10 w-[95%] xl:w-[932px] h-16  rounded-full">
      <div className="flex relative items-center justify-between w-full py-1 ">
        <div className=" xl:hidden w-64 h-full absolute bg-gradient-to-r from-white/40 -z-10 -left-0 rounded-full  opacity-50   "></div>
        <div className=" hidden xl:block w-24 h-16 absolute bg-white/70 -z-10 -left-4 rounded-full blur-xl opacity-50"></div>
        <div className=" hidden xl:block w-32 h-16 absolute bg-white/70 -z-10 left-1/2 rounded-full blur-xl opacity-40"></div>
        <div className=" pl-6">
          <Image className="" src={logo} width={94} height={24} alt="logo" />
        </div>
        <div className=" hidden xl:flex gap-6 ">
          {navLinks.map((navLink, index) => (
            <Link href={navLink.link} key={index}>
              <p
                className={cn(
                  " font-semibold text-white/40",
                  index === 0 && "text-white"
                )}
              >
                {navLink.text}
              </p>
            </Link>
          ))}
        </div>
        <Button className=" hidden xl:block rounded-full py-3 px-6 text-xl font-semibold bg-white text-red-700">
          {buttonText}
        </Button>

        <motion.div
          onClick={handleMenuClick}
          className={cn(
            "flex flex-col sm:hidden items-center justify-center gap-2  bg-black w-[44px] h-[44px] aspect-square rounded-full ",
            isMobileMenuOpen ? " bg-pink-700" : " bg-pink-700"
          )}
        >
          <motion.div
            animate={
              isMobileMenuOpen
                ? { rotate: "45deg", translateY: 5 }
                : { rotate: "0deg", translateY: 0 }
            }
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className=" w-5 bg-white h-[2px]"
          ></motion.div>
          <div
            className={cn(
              " mr-2 w-3 bg-white h-[2px]",
              isMobileMenuOpen ? "hidden" : "block"
            )}
          ></div>
          <motion.div
            animate={
              isMobileMenuOpen
                ? { rotate: "-45deg", translateY: -5 }
                : { rotate: "0deg", translateY: 0, x: 1 }
            }
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className=" w-5 bg-white h-[2px]"
          ></motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isMobileMenuOpen
            ? { height: "90vh", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          opacity: { delay: isMobileMenuOpen ? 0 : 0.2 },
        }}
        className="w-full h-full rounded-xl absolute bg-black top-8 left-0  -z-50 xl:hidden transition-transform duration-1000"
      >
        <div className="flex flex-col justify-between h-full pt-10 pb-4 px-4">
          <div className=" w-full py-6 px-4 flex flex-col gap-6 font-bold text-2xl">
            {navLinks.map((navLink, index) => (
              <Link href={navLink.link} key={index}>
                <p
                  className={(index !== 0 && " text-white/40") || "text-white"}
                >
                  {navLink.text}
                </p>
              </Link>
            ))}
          </div>
          <Button className="rounded-full py-3 px-6 text-xl font-semibold bg-white text-red-700">
            {buttonText}
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};
