import React from "react";

function LandingPage() {
  return (
    <div>
      <h1 className="absolute w-[535px] h-[163px] not-italic font-semibold text-4xl leading-[120%] flex items-center text-justify left-[40px] top-[300px]">
        Joining a group can open up a new chances and possibilities when pursing
        a share interest
      </h1>
      <button className="bg-white text-teal-500 border-2 rounded-xl absolute w-[258px] h-[62px] left-[174px] top-[520px]">
        GET START
      </button>
      <img
        src="macbook1.png"
        alt="cover"
        className="absolute w-[795px] h-[470px] left-[520px] top-[200px]"
      />
    </div>
  );
}

export default LandingPage;
