import React, { useEffect, useState } from "react";
import Category from "./Category/Category";

const LeftSideNav = () => {
  const [categories, setCatefories] = useState([]);

  useEffect(() => {
    fetch("./data/categories.json")
      .then((res) => res.json())
      .then((data) => setCatefories(data));
  }, []);

  return (
    <div>
      <h3 className="text-xl font-semibold">All Caterogy</h3>
      <div className="">
        {categories.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
