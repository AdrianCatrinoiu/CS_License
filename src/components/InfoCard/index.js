import React, { useEffect, useRef, useState } from "react";
import useIntersection from "../../customHooks/useIntersection";

const InfoCard = ({ title, text, position, image }) => {
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
          ? "transition ease-in duration-500 w-[80%] p-6 my-16 divide-x-2 shadow-xl rounded-xl bg-gray-100 flex flex-row justify-center"
          : "opacity-0"
      }
    >
      {position === "left" ? (
        <>
          <div className="p-6 w-1/2">
            {title && (
              <h1 className="text-4xl font-bold text-gray-600 mb-4">{title}</h1>
            )}

            <p>{text}</p>
          </div>
          <div className="p-6 w-1/2">
            {image && <img src={image} alt="img" />}
          </div>
        </>
      ) : (
        <>
          <div className="p-6 w-1/2">
            {image && <img src={image} alt="img" />}
          </div>
          <div className="p-6 w-1/2">
            <h1 className="text-4xl font-bold text-gray-600 mb-4">{title}</h1>
            <p>{text}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default InfoCard;
