import { cn } from "@/app/lib/utils";
import Image from "next/image";

interface props {
  url: string;
  className?: string;
}
export default function ResponsiveImage({ url, className = "" }: props) {
  return (
    <div className="relative w-full h-110">
      <Image
        src={url}
        alt="Hero image"
        fill
        className={cn("object-cover", className)}
      />
    </div>
  );
}
