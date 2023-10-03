import React from "react";

const Category = ({ category }) => {
  const { id, name } = category;

  return (
    <div>
      <div
        tabIndex="0" // Add tabIndex to make the div focusable
        className="mb-6 mt-4 px-5 py-2 rounded-md flex-col text-justify cursor-pointer focus:bg-[#E7E7E7] outline-none"
      >
        <span className="md:text-xl text-base font-semibold">{name}</span>
      </div>
    </div>
  );
};

export default Category;
