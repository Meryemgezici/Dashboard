import Image from "next/image";
import loadingGif from "./../../public/assets/images/loading.gif";

export default function Loading() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <Image
        src={loadingGif}
        width="400"
        height="480"
        alt="Medyanes"
        objectFit="cover"
        className="giphy-embed mb-4 rounded-l-full rounded-tr-full"
      />
      <p className="text-5xl font-semibold text-SlateGray animate-pulse ml-[500px]">
        Loading...
      </p>
    </div>
  );
}
