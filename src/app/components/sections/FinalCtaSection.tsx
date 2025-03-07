import React from "react";
import Text from "../ui/Text";
import Button from "../ui/Button";

export const FinalCtaSection = () => {
  return (
    <section className="w-full xl:max-w-[75vw] m-auto relative py-20 md:py-10 px-4">
      <div className="flex flex-col gap-10 items-center text-center justify-center">
        <Text className="font-bold text-4xl xl:text-5xl  w-[70%] ">
          <span className="text-primary"> Start for Free</span> Upgrade to
          Detonate
        </Text>

        <Text className="  md:text-3xl xl:text-xl text-center w-[80%] xl:w-[40%] ">
          Boom makes powerful tools accessible for everyone. Start with all the
          essentials, free forever. When you’re ready to elevate, Boom Pro takes
          your creations to the next level.
        </Text>
      </div>
      <div className=" w-full flex flex-col lg:flex-row gap-4 py-10">
        <div className=" w-full  rounded-3xl border border-black/20 ">
          <div className="flex  justify-between   py-4 px-4 items-center">
            <h2 className=" text-2xl font-semibold ">Free Forever</h2>
            <Button className=" lg:py-6 px-4  rounded-full bg-primary text-white">
              Get Started Free
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4 px-4 py-4 bg-secondary rounded-3xl">
            <div className="flex flex-col">
              <p>Recordings</p>
              <p className="font-bold">Unlimited</p>
            </div>
            <div className="flex flex-col">
              <p>Editing</p>
              <p className="font-bold">Basic</p>
            </div>
            <div className="flex flex-col">
              <p>Sharing</p>
              <p className="font-bold">Direct platform uploads</p>
            </div>
            <div className="flex flex-col">
              <p>Support</p>
              <p className="font-bold">Community forums</p>
            </div>
          </div>
        </div>
        <div className=" w-full  rounded-3xl border border-black/20 ">
          <div className="flex  justify-between   py-4 px-4 items-center">
            <h2 className=" text-2xl font-semibold ">Boom Pro</h2>
            <Button className=" lg:py-6 px-4  rounded-full bg-primary text-white">
              Get Started Free
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4 px-4 py-4 bg-primary/10 rounded-3xl">
            <div className="flex flex-col">
              <p>Recordings</p>
              <p className="font-bold">Unlimited + HD/4K</p>
            </div>
            <div className="flex flex-col">
              <p>Editing</p>
              <p className="font-bold">Advanced</p>
            </div>
            <div className="flex flex-col">
              <p>Sharing</p>
              <p className="font-bold">Premium Integrations</p>
            </div>
            <div className="flex flex-col">
              <p>Support</p>
              <p className="font-bold">24/7 Priority</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
