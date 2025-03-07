import React from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "../lib/utils";
import { navLinks } from "./sections/HeroSection";
export const Footer = () => {
  return (
    <section className=" rre w-full xl:max-w-[75vw] m-auto relative bg-[#181A1F] rounded-t-3xl ">
      <div className=" bg-gradient-to-b bg-white to-transparent absolute z-0 top-1/3 left-100  opacity-10 w-1/2 h-60 blur-3xl "></div>
      <div className="flex flex-col gap-8    lg:flex-row items-center justify-between py-10 border-b border-white/10 relative">
        <div>
          <Image src="/logo.png" width={188} height={400} alt="logo" />
        </div>
        <div className="flex text-center items-center justify-center gap-6 md:gap-10 flex-wrap">
          {navLinks.map((navLink, index) => (
            <Link href={navLink.link} key={index}>
              <p
                className={cn(
                  " text-lg font-semibold text-white/40",
                  index === 0 && "text-white"
                )}
              >
                {navLink.text}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex  gap-2">
          <div className="bg-primary items-center justify-center flex w-12 h-12 rounded-full">
            <Image
              src="/assets/icons/insta_icon.png"
              className="w-6 h-6"
              width={1888}
              height={400}
              alt="logo"
            />
          </div>
          <div className="bg-primary items-center justify-center flex w-12 h-12 rounded-full">
            <Image
              src="/assets/icons/insta_icon.png"
              className="w-6 h-6"
              width={1888}
              height={400}
              alt="logo"
            />
          </div>{" "}
          <div className="bg-primary items-center justify-center flex w-12 h-12 rounded-full">
            <Image
              src="/assets/icons/insta_icon.png"
              className="w-6 h-6"
              width={1888}
              height={400}
              alt="logo"
            />
          </div>{" "}
          <div className="bg-primary items-center justify-center flex w-12 h-12 rounded-full">
            <Image
              src="/assets/icons/insta_icon.png"
              className="w-6 h-6"
              width={1888}
              height={400}
              alt="logo"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between px-2 py-10 text-white">
        <div className="flex flex-col lg:flex-row gap-4 ">
          <p>Terms of service </p>
          <p>Privacy policies</p>
        </div>
        <p className="max-md:w-1/3 text-lg ">
          Crafted by{" "}
          <span className=" font-bold text-sm lg:text-lg"> Capital Compute</span>
        </p>
      </div>
      <div className="w-full  md:h-85">
        <Image
          src="/assets/icons/footer-icon.png"
          className="w-full h-full "
          width={1888}
          height={400}
          alt="logo"
        />
      </div>
    </section>
  );
};
