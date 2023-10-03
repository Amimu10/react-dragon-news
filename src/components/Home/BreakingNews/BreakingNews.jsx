import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex items-center bg-[#F3F3F3] rounded-md shadow-md gap-4 p-2 my-4">
      <button className="bg-[#D72050] text-white px-3 py-2">Latest</button>
      <Marquee className="text-lg font-semibold" pauseOnHover={true} speed={100}>
      Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default BreakingNews;
