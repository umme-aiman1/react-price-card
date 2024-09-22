import React from "react";

const App = () => {
  return (
    <div className="w-full h-screen bg-red-100 flex items-center justify-center">
      <div className=" flex items-center justify-center flex-col w-[85%] h-4/5 bg-white relative overflow-hidden rounded-lg sm:w-[80%] md:w-[60%] lg:w-[35%]">
      <div className="w-44 h-7 flex items-center justify-center bg-purple-700 text-white text-[16px] absolute -left-11 top-8 -rotate-45  ">Special offer!</div>
        <p className="text-3xl font-bold text-center mt-[10px] ">
          Platinum Plus <br />Content
        </p>
        <p className="text-3xl font-bold text-purple-700 mt-[30px]">$59<span className="text-[15px]">/month</span></p>
        <p className="text-[15px] text-center px-[50px] text-slate-500 text-semibold mt-[30px] sm:mt-[15px] sm:px-[90px] md:px-[75px] lg:px-[45px]">Access our exclusive premium content library and enjoy high quality videos on any devices you prefer</p>
        <p className="text-[16px] text-center text-slate-700 font-semibold mt-[15px]">Hurry! Offer expire June 20, 2024</p>
        <button className="w-3/4 h-[50px] bg-purple-700 text-white rounded-[30px] text-[16px] font-semibold mt-[25px] sm:mt-[35px] lg:mt-[45px]">Purchase Now</button>
      </div>
    </div>
  );
};

export default App;
