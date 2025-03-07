import React from "react";
import Text from "../ui/Text";
import { Header } from "../Header";
import Button from "../ui/Button";
import { DownloadIcon } from "@sanity/icons";
import Image from "next/image";
export const navLinks = [
  {
    text: "Boom in action",
    link: "",
  },
  {
    text: "Features",
    link: "",
  },
  {
    text: "Comparison",
    link: "",
  },
  {
    text: "Testimonials",
    link: "",
  },
  {
    text: "Pricing",
    link: "",
  },
];

const HeroSection = () => {
  return (
    <section className="p-2 relative w-full  ">
      <div className="flex relative h-full flex-col items-center gap-8 border-2 xl:w-[98vw] m-auto rounded-[50px] overflow-hidden  border-black/20 pt-4 ">
        <div className="absolute w-full h-full opacity-80 -z-10">
          <Image
            src="/bg-hero-1.png"
            alt="display"
            className=" w-full h-full"
            width={400}
            height={500}
          ></Image>
        </div>
        <div className="absolute w-full h-full  max-md:top-180   lg:rotate-0 opacity-80 -z-20">
          <Image
            src="/bg-hero-2.png"
            alt="display"
            className=" w-full"
            width={400}
            height={500}
          ></Image>
        </div>
        <div className="absolute w-full h-full opacity-30 -z-10 max-md:bottom-0 rotate-90 md:rotate-0">
          <Image
            src="/bg-hero-3.png"
            alt="display"
            className=" w-full"
            width={400}
            height={500}
          ></Image>
        </div>
         <div className="w-full h-[90%]  flex items-center justify-center ">
          <Header navLinks={navLinks} logo="/logo.png" buttonText="Log in" />
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <main className="flex flex-col gap-4 items-center text-center">
            <Text className=" text-4xl lg:text-6xl font-bold">
              The Only Screen Recorder That
            </Text>
            <Text className="text-4xl lg:text-6xl flex flex-col  lg:flex-row xl:gap-4    font-bold">
              Explodes
              <span className="text-primary flex  items-end gap-4 ">
                <span className="flex gap-2 items-end ">
                  Int
                  <span className=" pb-2">
                    <Image
                      src="/Vector.png"
                      className="max-md:w-5 max-md:h-5"
                      width={38}
                      height={20}
                      alt="icon"
                    />
                  </span>
                </span>
                Action
              </span>
            </Text>
            <Text className="text-center lg:font-medium text-sm xl:text-lg w-[90%]">
              Record, edit, and share your ideas with impact. Boom makes screen
              recording <br /> easy, powerful, and free —{" "}
              <span className="font-bold ">forever</span>.
            </Text>
          </main>
        </div>
        <div className="mt-2 flex flex-col gap-4 items-center w-full">
          <div className="flex gap-2">
            <Button className="rounded-full py-4 px-6 font-bold text-lg bg-primary">
              Get started Free
            </Button>
            <Button className=" hidden lg:flex  gap-1 items-center rounded-full py-4 px-6 font-bold text-lg  bg-white text-black">
              Download chrome extension
              <DownloadIcon fontSize={32} />
            </Button>
          </div>
          <Text className=" text-primary text-xl  font-bold">{`Watch Boom in Action ->`}</Text>
          <div className=" relative    mt-5 ">
            <div className=" w-[363px] xl:w-[1321px] h-[350px] relative flex flex-col items-center ">
              <div className=" w-full h-full pt-5 z-40 absolute">
                <Image
                  src="/browsers.png"
                  className="w-full max-md:h-full"
                  width={1400}
                  height={400}
                  alt="placeholder"
                />
              </div>
              <div className=" absolute -z-10 bg-white/50 w-full h-full rounded-t-3xl backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100"></div>
              <div className=" hidden  lg:flex absolute w-3/5 drop-shadow-lg flex-col items-center gap-3 bg-white rounded-[20px] z-50 px-4 py-4 bottom-4">
                <Text variant="body" className="text-black font-bold ">
                  Download app for:
                </Text>
                <div className="flex w-full justify-evenly gap-2">
                  <Button className="rounded-full w-full bg-[#0078D4]">
                    Windows
                  </Button>
                  <Button className="rounded-full w-full border border-black/40 text-black">
                    Apple M series
                  </Button>
                  <Button className="rounded-full w-full border border-black/40 text-black">
                    Apple Intel chip
                  </Button>
                  <Button className="rounded-full w-full border border-black/40 text-black">
                    Linux
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
