import CategoryItems from "./CategoryItems";
import { useState } from "react";

const Category = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="w-6/12 shadow-md bg-gray-50 p-4 mx-auto my-4 rounded-md">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.category} ({data.menu.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItems && <CategoryItems data={data.menu} />}
    </div>
  );
};

export default Category;