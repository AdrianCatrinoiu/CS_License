import React from "react";

const EmissionBadge = (emissionBadge) => {
  switch (true) {
    case emissionBadge.emissionBadge === "A+++":
      return (
        <div className="flex flex-col w-full justify-between border border-black rounded-r-3xl overflow-hidden">
          <p className=" self-stretch bg-green-900 text-white rounded-br-full text-[40px] font-MontserratBold mr-1 w-full">
            A+++
          </p>
          <p className=" self-stretch bg-green-700 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[70%]">
            A++
          </p>
          <p className=" self-stretch bg-green-500 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[60%]">
            A+
          </p>
          <p className=" self-stretch bg-green-300 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[50%]">
            A
          </p>
          <p className=" self-stretch bg-yellow-400 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[40%]">
            B
          </p>
          <p className=" self-stretch bg-yellow-700 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[30%]">
            C
          </p>
          <p className=" self-stretch bg-orange-500 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[20%]">
            D
          </p>
          <p className=" self-stretch bg-red-700 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[10%]">
            E
          </p>
        </div>
      );
    case emissionBadge.emissionBadge === "A++":
      return (
        <div className="flex flex-col w-full justify-between border border-black rounded-r-3xl overflow-hidden">
          <p className=" self-stretch bg-green-900 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[80%]">
            A+++
          </p>
          <p className=" self-stretch bg-green-700 text-white rounded-br-full text-[40px] font-MontserratBold mr-1 w-full">
            A++
          </p>
          <p className=" self-stretch bg-green-500 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[60%]">
            A+
          </p>
          <p className=" self-stretch bg-green-300 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[50%]">
            A
          </p>
          <p className=" self-stretch bg-yellow-400 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[40%]">
            B
          </p>
          <p className=" self-stretch bg-yellow-700 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[30%]">
            C
          </p>
          <p className=" self-stretch bg-orange-500 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[20%]">
            D
          </p>
          <p className=" self-stretch bg-red-700 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[10%]">
            E
          </p>
        </div>
      );
    case emissionBadge.emissionBadge === "A+":
      return (
        <div className="flex flex-col w-full justify-between border border-black rounded-r-3xl overflow-hidden">
          <p className=" self-stretch bg-green-900 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[80%]">
            A+++
          </p>
          <p className=" self-stretch bg-green-700 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[70%]">
            A++
          </p>
          <p className=" self-stretch bg-green-500 text-white rounded-br-full text-[40px] font-MontserratBold mr-1 w-full">
            A+
          </p>
          <p className=" self-stretch bg-green-300 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[50%]">
            A
          </p>
          <p className=" self-stretch bg-yellow-400 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[40%]">
            B
          </p>
          <p className=" self-stretch bg-yellow-700 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[30%]">
            C
          </p>
          <p className=" self-stretch bg-orange-500 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[20%]">
            D
          </p>
          <p className=" self-stretch bg-red-700 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[10%]">
            E
          </p>
        </div>
      );
    case emissionBadge.emissionBadge === "A":
      return (
        <div className="flex flex-col w-full justify-between border border-black rounded-r-3xl overflow-hidden">
          <p className=" self-stretch bg-green-900 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[80%]">
            A+++
          </p>
          <p className=" self-stretch bg-green-700 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[70%]">
            A++
          </p>
          <p className=" self-stretch bg-green-500 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[60%]">
            A+
          </p>
          <p className=" self-stretch bg-green-300 text-white rounded-br-full text-[40px] font-MontserratBold mr-1 w-full">
            A
          </p>
          <p className=" self-stretch bg-yellow-400 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[40%]">
            B
          </p>
          <p className=" self-stretch bg-yellow-700 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[30%]">
            C
          </p>
          <p className=" self-stretch bg-orange-500 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[20%]">
            D
          </p>
          <p className=" self-stretch bg-red-700 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[10%]">
            E
          </p>
        </div>
      );
    case emissionBadge.emissionBadge === "B":
      return (
        <div className="flex flex-col w-full justify-between border border-black rounded-r-3xl overflow-hidden">
          <p className=" self-stretch bg-green-900 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[80%]">
            A+++
          </p>
          <p className=" self-stretch bg-green-700 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[70%]">
            A++
          </p>
          <p className=" self-stretch bg-green-500 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[60%]">
            A+
          </p>
          <p className=" self-stretch bg-green-300 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[50%]">
            A
          </p>
          <p className=" self-stretch bg-yellow-400 text-white rounded-br-full text-[40px] font-MontserratBold mr-1 w-full">
            B
          </p>
          <p className=" self-stretch bg-yellow-700 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[30%]">
            C
          </p>
          <p className=" self-stretch bg-orange-500 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[20%]">
            D
          </p>
          <p className=" self-stretch bg-red-700 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[10%]">
            E
          </p>
        </div>
      );
    case emissionBadge.emissionBadge === "C":
      return (
        <div className="flex flex-col w-full justify-between border border-black rounded-r-3xl overflow-hidden">
          <p className=" self-stretch bg-green-900 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[80%]">
            A+++
          </p>
          <p className=" self-stretch bg-green-700 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[70%]">
            A++
          </p>
          <p className=" self-stretch bg-green-500 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[60%]">
            A+
          </p>
          <p className=" self-stretch bg-green-300 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[50%]">
            A
          </p>
          <p className=" self-stretch bg-yellow-400 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[40%]">
            B
          </p>
          <p className=" self-stretch bg-yellow-700 text-white rounded-br-full text-[40px] font-MontserratBold mr-1 w-full">
            C
          </p>
          <p className=" self-stretch bg-orange-500 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[20%]">
            D
          </p>
          <p className=" self-stretch bg-red-700 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[10%]">
            E
          </p>
        </div>
      );
    case emissionBadge.emissionBadge === "D":
      return (
        <div className="flex flex-col w-full justify-between border border-black rounded-r-3xl overflow-hidden">
          <p className=" self-stretch bg-green-900 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[80%]">
            A+++
          </p>
          <p className=" self-stretch bg-green-700 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[70%]">
            A++
          </p>
          <p className=" self-stretch bg-green-500 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[60%]">
            A+
          </p>
          <p className=" self-stretch bg-green-300 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[50%]">
            A
          </p>
          <p className=" self-stretch bg-yellow-400 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[40%]">
            B
          </p>
          <p className=" self-stretch bg-yellow-700 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[30%]">
            C
          </p>
          <p className=" self-stretch bg-orange-500 text-white rounded-br-full text-[40px] font-MontserratBold mr-1 w-full">
            D
          </p>
          <p className=" self-stretch bg-red-700 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[10%]">
            E
          </p>
        </div>
      );
    case emissionBadge.emissionBadge === "E":
      return (
        <div className="flex flex-col w-full justify-between border border-black rounded-r-3xl overflow-hidden">
          <p className=" self-stretch bg-green-900 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[80%]">
            A+++
          </p>
          <p className=" self-stretch bg-green-700 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[70%]">
            A++
          </p>
          <p className=" self-stretch bg-green-500 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[60%]">
            A+
          </p>
          <p className=" self-stretch bg-green-300 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[50%]">
            A
          </p>
          <p className=" self-stretch bg-yellow-400 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[40%]">
            B
          </p>
          <p className=" self-stretch bg-yellow-700 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[30%]">
            C
          </p>
          <p className=" self-stretch bg-orange-500 text-white rounded-br-full text-[20px] font-MontserratBold mr-1 w-[20%]">
            D
          </p>
          <p className=" self-stretch bg-red-700 text-white rounded-br-full text-[40px] font-MontserratBold mr-1 w-full">
            E
          </p>
        </div>
      );

    default:
      return <p className="mt-8">Finalize your form</p>;
  }
};

export default EmissionBadge;
