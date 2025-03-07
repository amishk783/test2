import React from "react";
import Text from "../ui/Text";
import Image from "next/image";
import Button from "../ui/Button";
const FeaturesSection = () => {
  return (
    <section className=" w-full xl:max-w-[80vw] m-auto flex flex-col px-4 gap-10 py-20">
      <div className="flex flex-col  xl:flex-row items-center xl:gap-48 ">
        <div className="flex flex-col  xl:w-[45%] py-10 text-5xl">
          <Text className=" text-3xl xl:text-5xl" variant="heading">
            Yes, You Read That Right: Boom is
            <span className=" text-primary"> 100% Free</span> Forever.
          </Text>
          <div className="mt-3 ">
            <Text variant="caption" className="text-sm">
              <span className="font-bold">
                No hidden fees. No sneaky trials.
              </span>
              Just robust tools to create, edit, and <br /> share your ideas —
              without limits.
            </Text>
          </div>
        </div>
        <div className=" xl:w-[40%]">
          <Text className=" text-base  xl:text-2xl font-bold leading-tight">
            Boom believes that creativity should never <br />
            be gated by cost. That’s why we’re proud to <br />
            offer powerful, intuitive screen recording <br />
            tools at no charge.
          </Text>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row items-end rounded-l-3xl  h-full w-full">
        <div className="  xl:w-[445px] xl:h-[225px] bg-secondary p-4 md:p-8 flex md:gap-12 flex-row gap-4  md:flex-col rounded-l-2xl ">
          <div className="bg-white w-16 h-16 rounded-md items-center justify-center flex">
            <Image
              src="/feature-icon.png"
              className=""
              alt="icon"
              width={32}
              height={32}
            />
          </div>
          <p className=" md:text-2xl font-semibold text-black w-5/6">
            Non-intrusive ads keep the lights on
          </p>
        </div>
        <div className="  xl:w-[445px] xl:h-[225px] bg-secondary p-4 md:p-8 flex md:gap-12 flex-row gap-4  md:flex-col  ">
          <div className="bg-white w-16 h-16 rounded-md items-center justify-center flex">
            <Image
              src="/feature-icon-1.png"
              className=""
              alt="icon"
              width={32}
              height={32}
            />
          </div>
          <p className=" md:text-2xl font-semibold text-black w-full flex gap-12 flex-col">
            You enjoy professional-grade tools, completely free
          </p>
        </div>
        <div className=" md:w-[611px] relative p-4 md:p-8  md:h-80 bg-[#181A1F] rounded-r-3xl flex flex-col gap-4 md:gap-12 ">
          <div className=" absolute md:-left-20 -right-12 rotate-20 md:rotate-0 -top-8  w-48 md:w-60 h-24">
            <Image
              src="/feature-chips.png"
              className=" w-full h-full "
              alt="icon"
              width={280}
              height={80}
            />
          </div>
          <div className="bg-white w-10 h-10 md:w-20 md:h-16 rounded-md items-center justify-center flex">
            <Image
              src="/feature-icon-2.png"
              className=" w-6 md:w-10"
              alt="icon"
              width={40}
              height={40}
            />
          </div>
          <p className=" text-white  md:text-2xl font-semibold w-full">
            Everyone has a story to share. Whether you’re educating, pitching,
            or creating, Boom empowers you to connect without financial
            barriers.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between border-2  bg-primary/20  border-red-200 p-2 px-6 gap-4 md:px-8 rounded-md">
        <p className=" text-2xl font-bold text-black/80">
          Why wait? Start creating with Boom today!
        </p>
        <Button className="bg-primary rounded-full max-md:w-full ">Get Started Free</Button>
      </div>
    </section>
  );
};

export default FeaturesSection;
