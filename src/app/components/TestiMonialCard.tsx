import Image from "next/image";
import React from "react";
import { cn } from "../lib/utils";

interface Props {
  review: string;
  author: string;
  large: boolean;
  className: string;
  job: string;
  authorImage: string;
}

export const TestiMonialCard: React.FC<Props> = ({
  review,
  author,
  large,
  job,
  authorImage,
  className,
}) => {
  console.log("🚀 ~ authorImage:", authorImage)
  return (
    <div
      className={cn(
        "flex gap-4 border border-black/10 flex-col bg-secondary h-min rounded-3xl",
        large ? "w-[358px] lg:w-[640px]" : " w-[250px] lg:w-[358px]",
        className
      )}
    >
      <div className="flex flex-col gap-2 border-b  p-6  pb-4 border-black/10">
        <Image
          src="/assets/icons/testimonial-icon.png"
          width={24}
          height={24}
          alt=""
        />
        <p>{review}</p>
      </div>
      <div className="flex gap-2  px-6 py-4">
        <Image
          src="/assets/icons/testimonial-author.png"
          width={48}
          height={48}
          alt=""
        />
        <div>
          <h5>{author}</h5>
          <p>{job}</p>
        </div>
      </div>
    </div>
  );
};
