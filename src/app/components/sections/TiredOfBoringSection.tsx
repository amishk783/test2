import React from "react";
import Text from "../ui/Text";

import Image from "next/image";
const TiredOfBoringSection = () => {
  return (
    <section className=" w-full max-md:h-[1600px] xl:max-w-[75vw] m-auto relative ">
      <div className="flex flex-col gap-10 items-center justify-center">
        <Text className="font-bold text-3xl xl:text-6xl text-center w-[70%] xl:w-1/3 ">
          Tired of Boring? <span className="text-primary">Go Boom.</span>
        </Text>
        <Text className=" text-3xl xl:text-xl text-center w-[70%] xl:w-1/3 ">
          With Boom, every screen recording feels like a mic drop.
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative h-full xl:h-[675px] lg:-mt-28 ">
        {/* Bottom Card */}
        {/* <div className="flex flex-col relative md:flex-row px-4  w-full h-[500px]"> */}
        <div className="rounded-[25px]  bg-secondary flex flex-col gap-3 items-center  h-[500px]  py-6 md:pb-0 relative z-10">
          {/* bottom-left */}
          <div className=" w-40 h-13 bg-primary/60 absolute backdrop-blur-2xl right-0 z-20 rounded-l-xl bottom-18"></div>
          {/* bottom-middle */}
          <div className=" w-14 h-13 bg-primary/60 absolute backdrop-blur-2xl right-24  z-20 rounded-xl bottom-36"></div>
          {/* top */}
          <div className=" w-18 h-13 bg-primary/60 absolute backdrop-blur-2xl left-0 z-20 rounded-r-xl top-48 lg:top-60"></div>
          <Text variant="subheading" className="font-semibold lg:w-full px-6 ">
            Instant Recording
          </Text>

          <Text
            variant="body"
            className="text-center w-2/3 lg:w-full px-6 lg:text-start lg:text-lg"
          >
            Launch and start recording in seconds - your time is valuable
          </Text>
          <div className="w-[90%]">
            <Image
              src="/iPhone-16.png"
              width={400}
              height={100}
              alt="Hero image"
            />
          </div>
        </div>

        {/* Top Stacked Card */}
        <div className="rounded-[25px] absolute md:relative w-[92%]  h-[500px] xl:h-[76%] bg-secondary flex flex-col md:flex-col-reverse gap-3 items-center mx-4 py-6 top-78 md:top-40 lg:h-[548px] left-0 drop-shadow-xl z-20 shadow-lg lg:shadow-none overflow-hidden">
          <div className=" w-40 h-13 bg-primary/60 absolute backdrop-blur-2xl right-0 z-20 rounded-l-xl top-54"></div>
          <Text variant="subheading" className="font-semibold">
            Dynamic Edits
          </Text>
          <Text variant="body" className="text-center w-2/3">
            Add captions, trim the fluff, and keep only what matters.
          </Text>
          <div className="w-[90%] lg:h-full">
            <Image
              src="/iPhone-16.png"
              className=" block lg:hidden "
              width={400}
              height={100}
              alt="Hero image"
            />
            <Image
              src="/iPhone-16-2.png"
              className=" hidden lg:block"
              width={400}
              height={100}
              alt="Hero image"
            />
          </div>
        </div>
        {/* third card */}
        <div className="rounded-[25px] absolute md:relative w-[92%] h-[500px] xl:h-[76%] xl:overflow-hidden bg-secondary flex flex-col gap-3 items-center mx-4 py-6 top-156 md:top-40 md:h-full left-0 drop-shadow-xl z-20 shadow-lg lg:shadow-none">
          <div className=" w-40 h-13 bg-primary/60 absolute backdrop-blur-2xl right-0 z-20 rounded-l-xl bottom-38"></div>
          <Text variant="subheading" className="font-semibold">
            Streamlined Sharing
          </Text>
          <Text variant="body" className="text-center w-2/3">
            Add captions, trim the fluff, and keep only what matters.
          </Text>
          <div className="w-[90%]">
            <Image
              src="/iPhone-16.png"
              width={400}
              height={100}
              alt="Hero image"
            />
          </div>
        </div>
        {/* 4 card */}
        <div className="rounded-[25px] absolute md:relative w-[92%] h-[500px] xl:h-full  md:h-full bg-secondary flex flex-col lg:flex-col-reverse gap-3 items-center mx-4 py-6  md:py-0 top-238 left-0 md:top-0 drop-shadow-xl  z-20 shadow-lg shadow-black lg:shadow-none overflow-hidden xl:overflow-visible ">
          <div className=" w-40 h-13 bg-primary/60 absolute backdrop-blur-2xl right-0 z-20 rounded-l-xl top-60 xl:top-30"></div>
          <div className=" w-40 h-18 bg-primary/60 absolute backdrop-blur-2xl left-0 z-20 rounded-r-xl bottom-14 lg:bottom-64"></div>
          <Text variant="subheading" className="font-semibold">
            Crystal-Clear Quality
          </Text>
          <Text variant="body" className="text-center w-2/3">
            Share your vision in HD or 4K for maximum clarity and impact.
          </Text>
          <div className="w-[90%] h-full">
            <Image
              src="/iPhone-16.png"
              width={400}
              height={100}
              className="block lg:hidden"
              alt="Hero image"
            />
            <Image
              src="/iPhone-17.png"
              width={400}
              height={100}
              className="lg:block hidden"
              alt="Hero image"
            />
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default TiredOfBoringSection;
