import React from "react";
import Text from "../ui/Text";
import Image from "next/image";
import Button from "../ui/Button";
export const AiSuperpowersSection = () => {
  return (
    <section className="w-full xl:max-w-[75vw] m-auto relative py-30 px-4  ">
      <div className="flex flex-col gap-4 lg:gap-10 items-center justify-center">
        <Text className="font-bold text-4xl xl:text-6xl text-center  w-[70%] xl:w-[44%] ">
          Your Videos, Supercharged
          <span className="text-primary"> with AI</span>
        </Text>
        <Text className=" lg:text-3xl xl:text-xl text-center  w-[70%] xl:w-[44%] ">
          Automate, edit, and share like never before — effortlessly.
        </Text>
      </div>
      <div className=" flex flex-col lg:flex-row w-full relative lg:h-[540px]  overflow-hidden rounded-2xl  bg-secondary gap-4 my-10  lg:p-12">
        <div className=" bg-gradient-to-br from-red-300 w-64 h-30 rounded-full blur-3xl to-transparent absolute z-0 bottom-0  left-0"></div>
        <div className=" bg-gradient-to-tr from-red-300 w-64 h-30 rounded-full blur-3xl to-transparent absolute z-0 top-0  right-0"></div>
        <div className=" w-full lg:w-1/2 flex flex-col gap-4 lg:gap-60 p-6  relative">
          <div className="space-y-3 lg:w-2/3">
            <Text className="text-3xl font-semibold">AI-Powered Solution</Text>
            <Text className=" text-lg">
              BOOM turns your screen recordings into actionable tasks — no
              manual notes needed.
            </Text>
          </div>
          <div className="">
            <ul className="flex flex-col gap-2 list-none">
              <li className=" flex items-center gap-2">
                <Image
                  src="/assets/icons/star_icon.png"
                  alt=""
                  height={16}
                  width={16}
                />
                <p className=" font-semibold text-lg ">
                  Instant To-Dos – AI detects key tasks.
                </p>
              </li>
              <li className=" flex items-center gap-2">
                <Image
                  src="/assets/icons/star_icon.png"
                  alt=""
                  height={16}
                  width={16}
                />
                <p className=" font-semibold text-lg ">
                  Time-Synced Tasks – Jump to key moments.
                </p>
              </li>
              <li className=" flex items-center gap-2">
                <Image
                  src="/assets/icons/star_icon.png"
                  alt=""
                  height={16}
                  width={16}
                />
                <p className=" font-semibold text-lg ">
                  Seamless Syncing – Connect with calendars.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className=" xl:w-1/2 flex flex-col md:gap-24 relative">
          <div className=" w-full hidden lg:flex items-end justify-end gap-20">
            <Button className=" bg-white py-8 rounded-full text-primary">
              Comming Soon
            </Button>
          </div>
          <div className=" w-full h-full ">
            <Image
              src="/assets/icons/placeholder_card.png"
              alt=""
              className="w-full h-[250px] md:h-full"
              height={1000}
              width={1000}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
