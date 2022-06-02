import React, { useEffect, useRef, useState } from "react";
import useIntersection from "../../customHooks/useIntersection";

const InfoCard = ({ title, text, textComponent, position, image }) => {
  const [isVisible, setIsVisible] = useState();

  const ref = useRef();
  const inViewport = useIntersection(ref, "0px");
  useEffect(() => {
    if (inViewport) {
      setIsVisible(true);
    }
  }, [inViewport]);
  return (
    <div
      ref={ref}
      className={
        isVisible
          ? "transition ease-in duration-500 md:w-[80%] p-6 my-16 md:divide-x-2  divide-slate-300 shadow-xl rounded-xl bg-slate-200 flex md:flex-row flex-col justify-center"
          : "opacity-0"
      }
    >
      {position === "left" ? (
        <>
          <div className="p-6 md:w-1/2">
            {title && (
              <h1 className="text-4xl font-bold text-gray-600 mb-4">{title}</h1>
            )}

            {textComponent ? (
              <div className="flex justify-center">{textComponent}</div>
            ) : (
              <p>{text}</p>
            )}
          </div>
          <div className="p-6 md:w-1/2 flex flex-row items-center justify-center">
            {image && <img src={image} alt="img" />}
          </div>
        </>
      ) : (
        <>
          <div className="p-6 md:w-1/2 flex flex-row items-center justify-center">
            {image && <img src={image} alt="img" />}
          </div>
          <div className="p-6 md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-600 mb-4">{title}</h1>
            {textComponent ? (
              <div className="flex justify-center">{textComponent}</div>
            ) : (
              <p>{text}</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default InfoCard;
