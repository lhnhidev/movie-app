import { useEffect, useState } from "react";

export default function ImageComponent({
  src,
  alt = "image",
  aspect = "2/3",
  width = undefined,
  height = undefined,
  className,
}) {
  const [currentSource, setCurrentSource] = useState("/2x3.svg");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const newImg = new Image();
    newImg.src = src;
    newImg.onload = () => {
      setCurrentSource(newImg.src)
      setIsLoading(false);
    };

    return () => newImg.onload = null;
  }, [src]);

  return (
    <div className={aspect ? `aspect-[${aspect}] w-full` : "w-full"}>
      <img
        className={`
          transition-opacity duration-700 ease-in-out 
          ${className} 
          ${isLoading ? "opacity-30 blur-md" : "opacity-100"}
        `}
        src={currentSource}
        alt={alt}
        width={width ?? ""}
        height={height ?? ""}
        
      ></img>
    </div>
  );
}
