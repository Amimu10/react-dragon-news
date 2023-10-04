import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const {_id, title, image_url, details, rating, total_view } = news;

  return (
    <div>
   <div className="card card-compact bg-base-100 shadow-xl">
    <p className="mb-2">{title}</p>
   <img src={image_url} alt="Shoes" />
  <div className="card-body">
    <h2 className="">
    {
      details.length > 200 ? <p>{details.slice(0, 200)} <Link to={`/news/${_id}`}className="text-orange-500 font-semibold">Read More...</Link></p>
      : 
      <p>{details}</p>
    }
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="flex justify-between">
     <h2>rating: {rating.number}</h2>
     <h3>view: {total_view}</h3>
    </div>
  </div>
</div>
    </div>
  );
};

export default NewsCard;
