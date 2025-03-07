import React from "react";
import Text from "../ui/Text";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
import { CheckmarkIcon, CloseIcon } from "@sanity/icons";

type PricingSectionType = {
  Feature: {
    icon: string;
    items: {
      icon: string;
      feature: string;
    }[];
  };
  Boom: { icon: string; items: string[] };
  Loom: { icon: string; items: string[] };
  Tella: { icon: string; items: string[] };
};

const pricingSection: PricingSectionType = {
  Feature: {
    icon: "/assets/pricing/pricing-section-1.png",
    items: [
      {
        icon: "",
        feature: "Explosive Branding",
      },
      {
        icon: "",
        feature: "Fast Sharing",
      },
      {
        icon: "",
        feature: "Premium Quality",
      },
      {
        icon: "",
        feature: "Screen recording",
      },
      {
        icon: "",
        feature: "AI Document from Recording",
      },
      {
        icon: "",
        feature: "Edit Script After Recording",
      },
      {
        icon: "",
        feature: "Replace Voiceover with AI",
      },
      {
        icon: "",
        feature: "Automated Zoom Effects",
      },
      {
        icon: "",
        feature: "Background Effetcs & Music",
      },
      {
        icon: "",
        feature: "Free Forever",
      },
    ],
  },
  Boom: {
    icon: "/assets/pricing/pricing-section-1.png",
    items: [
      "Bold Animations,sharp Ui",
      "Instant platform integration",
      "HD/4k included for free",
      "tick",
      "tick",
      "tick",
      "tick",
      "tick",
      "tick",
      "tick",
    ],
  },
  Loom: {
    icon: "/assets/pricing/pricing-section-2.png",
    items: [
      "Clearn but minimal effects",
      "Requires added steps",
      "HD only on paid plans",
      "tick",
      "tick",
      "close",
      "close",
      "close",
      "close",
      "No, limited free tier",
    ],
  },
  Tella: {
    icon: "/assets/pricing/pricing-section-3.png",
    items: [
      "Smooth but lacks dynamic feel",
      "Quick but limited options",
      "4k supported, but with limits",
      "tick",
      "close",
      "tick",
      "tick",
      "tick",
      "tick",
      "No, limited free tier",
    ],
  },
};
const PricingSection = () => {
  return (
    <section className="w-full xl:max-w-[75vw] m-auto relative ">
      <div className="flex flex-col gap-10 items-center justify-center">
        <Text className="font-bold text-3xl xl:text-5xl  w-[70%] xl:w-[44%] ">
          Why Settle for a Whisper When You Can
          <span className="text-primary"> Go Boom?</span>
        </Text>
      </div>
      <div className=" w-full grid grid-cols-4 py-20">
        {Object.entries(pricingSection).map(([category, content], index) => (
          <div
            key={index}
            className={cn(
              " rounded-lg shadow-lg  ",
              index === 1 && "scale-y-110  "
            )}
          >
            {/* Column Title */}
            <h3
              className={cn(
                "text-xl font-semibold p-4 bg-[#E9E9E9] border-b border-black/10 capitalize text-black ",
                index === 0 && " rounded-tl-3xl ",
                index === 1 &&
                  "bg-red-100 rounded-t-3xl py-6 flex w-full scale-x-105 scale-103   items-center justify-center "
              )}
            >
              {index === 0 ? (
                category
              ) : index === 1 ? (
                <div className=" w-[171px] ">
                  <Image
                    src={content.icon}
                    alt="asad"
                    width={400}
                    height={400}
                  />
                </div>
              ) : (
                <div className=" w-[95px] ">
                  <Image
                    src={content.icon}
                    alt="asad"
                    width={400}
                    height={400}
                  />
                </div>
              )}
            </h3>

            {/* List of Features */}
            <ul
              className={cn(
                " bg-secondary w-full ",
                index === 1 && "bg-red-100 scale-x-105 backdrop-blur-3xl  "
              )}
            >
              {content.items.map((item, idx) => (
                <li
                  key={idx}
                  className={cn(
                    "flex items-center gap-2 p-6   border border-black/10 ",
                    index === 1 && "py-6 h-[71px]"
                  )}
                >
                  {typeof item === "object" ? (
                    <>
                      <span className="text-xl ">{item.icon}</span>
                      <Text className="font-semibold text-xl">
                        {item.feature}
                      </Text>
                    </>
                  ) : (
                    <Text>
                      {item === "tick" ? (
                        <CheckmarkIcon />
                      ) : item === "close" ? (
                        <CloseIcon />
                      ) : (
                        item
                      )}
                    </Text>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
