import React from "react";
import Text from "../ui/Text";
import Image from "next/image";
const DemoSection = () => {
  return (
    <section className=" w-full lg:w-[80vw] px-4 relative h-full m-auto pt-40 md:py-40">
      <div className="w-full relative h-full ">
        <div className="flex flex-col gap-2 lg:gap-10 items-center justify-center py-2">
          <Text className="font-bold text-3xl xl:text-5xl text-center w-[70%] xl:w-1/3 ">
            See Boom <span className="text-primary">in Action!</span>
          </Text>
          <Text className=" text-lg xl:text-xl text-center w-[70%] xl:w-1/3 ">
            With Boom, every screen recording feels like a mic drop.
          </Text>
        </div>
        <div className="w-full h-full py-4 relative">
          <div className="w-full lg:w-full h-[700px]">
            <Image
              src="/demo-section-hero.png"
              className="w-full h-full object-cover "
              width={1400}
              height={648}
              alt="placeholder"
            />
          </div>
          <div className=" w-full h-min absolute bottom-0 flex  items-center justify-center   ">
            <div className="grid grid-col-1 lg:grid-cols-3 border-2 lgw-[97%] items-center justify-center  border-red-200 rounded-4xl bg-[#181A1F] mt-[-6px]">
              <div className="flex items-center gap-5 w-full p-4 lg:p-8">
                <div className="w-12 h-12 lg:h-16 lg:w-16 bg-red-50 backdrop-blur-2xl border-2 rounded-xl  items-center justify-center flex  ">
                  <p className="text-xl text-primary font-semibold">01</p>
                </div>
                <div className="w-1/2">
                  <Text className=" text-white text-md lg:text-xl font-semibold">
                    Hit <span className=" text-primary">Record</span> to start
                    capturing your screen
                  </Text>
                </div>
              </div>

              <div className="flex items-center gap-5 w-full p-4 lg:p-6">
                <div className="w-12 h-12 lg:h-16 lg:w-20 bg-red-50 backdrop-blur-2xl border-2 rounded-xl  items-center justify-center flex   ">
                  <p className="text-xl text-primary font-semibold">02</p>
                </div>
                <div className="w-full">
                  <Text className=" text-white text-md lg:text-xl font-semibold">
                    Use intuitive editing tools to trim, caption, and
                    <span className=" text-primary">
                      {" "}
                      polish your video Hit
                    </span>
                  </Text>
                </div>
              </div>
              <div className="flex items-center gap-5 w-full p-4 lg:p-8">
                <div className=" w-12 h-12 lg:h-16 lg:w-16 bg-red-50 backdrop-blur-2xl border-2 rounded-xl  items-center justify-center flex  ">
                  <p className="text-xl text-primary font-semibold">03</p>
                </div>
                <div className="w-1/2">
                  <Text className=" text-white text-md lg:text-xl font-semibold">
                    <span className=" text-primary"> Share instantly </span>
                    with just one Boom-click
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
