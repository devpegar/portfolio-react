import React from "react";

function Separador() {
  return (
    <>
      <div className="flex items-center relative my-5 w-1/2 mx-auto">
        <div className="bg-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-0 px-1 rounded-xl w-2/5 h-[10px]"></div>
        <div className="border-b-2 h-[1px] w-full divide-gray-500"></div>
      </div>
    </>
  );
}

export default Separador;
