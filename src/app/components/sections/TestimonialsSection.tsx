"use client";
import React, { useState } from "react";
import Text from "../ui/Text";
import { TestiMonialCard } from "../TestiMonialCard";
import { Slider } from "@/components/ui/slider";


import { animate, motion, useMotionValue, useTransform } from "framer-motion";
const testimonials = [
  {
    author: "Amelia Hawthome",
    job: `CEO of "SMM Media""`,
    review:
      "Boom has completely revolutionized the way I share updates, turning what used to be mundane and routine into vibrant and engaging experiences that captivate my audience. It's as if I've gained a creative partner who not only understands my vision but also brings it to life with flair and imagination. Every idea I have is elevated to new heights, making my communications more impactful and memorable. ",
  },
  {
    author: "Amelia Hawthome",
    job: `CEO of "SMM Media""`,
    review:
      "Boom has completely revolutionized the way I share updates, turning what used to be mundane and routine into vibrant and engaging experiences that captivate my audience. ",
  },
  {
    author: "Amelia Hawthome",
    job: `CEO of "SMM Media""`,
    review:
      "Boom has completely revolutionized the way I share updates, turning what used to be mundane and routine into vibrant and engaging experiences that captivate my audience. ",
  },
  {
    author: "Amelia Hawthome",
    job: `CEO of "SMM Media""`,
    review:
      "Boom has completely revolutionized the way I share updates, turning what used to be mundane and routine into vibrant and engaging experiences that captivate my audience. ",
  },
  {
    author: "Amelia Hawthome",
    job: `CEO of "SMM Media""`,
    review:
      "Boom has completely revolutionized the way I share updates, turning what used to be mundane and routine into vibrant and engaging experiences that captivate my audience. ",
  },
  {
    author: "Amelia Hawthome",
    job: `CEO of "SMM Media""`,
    review:
      "Boom has completely revolutionized the way I share updates, turning what used to be mundane and routine into vibrant and engaging experiences that captivate my audience. ",
  },
];

export const TestimonialsSection = () => {
  const [position, setPosition] = useState([20]);
  const motionValue = useMotionValue(position[0]);
  const translateX = useTransform(motionValue, [0, 100], [0, -800]);
  const handleSliderChange = (value: number[]) => {
    setPosition(value);
    animate(motionValue, value[0], {
      type: "spring",
      stiffness: 250,
      damping: 30,
    });
  };
  return (
    <section className="w-full h-min md:py-10 ">
      <div className="flex flex-col gap-10 items-center justify-center">
        <Text className="font-bold text-3xl xl:text-6xl text-center  w-[70%] xl:w-[44%] ">
          What Are People Saying
          <span className="text-primary"> About Boom?</span>
        </Text>
      </div>

      <div className="w-full flex gap-4 pt-10 overflow-hidden">
        <motion.div
          style={{
            perspective: "1200px",
            translateX: translateX,
            transformStyle: "preserve-3d",
          }}
          className="w-[120%] flex gap-4 py-8"
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className=" px-4">
              <TestiMonialCard
                className={index % 2 ? `rotate-4` : "-rotate-3"}
                large={index % 4 === 0}
                {...testimonial}
                authorImage=""
              />
            </div>
          ))}
        </motion.div>
      </div>
      <div className="w-full py-10 items-center justify-center flex ">
        <div className=" w-5/6">
          <Slider
            defaultValue={position}
            onValueChange={handleSliderChange}
            max={100}
            step={1}
          ></Slider>
        </div>
      </div>
    </section>
  );
};
