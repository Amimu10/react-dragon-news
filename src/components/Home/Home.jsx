import React from "react";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import LeftSideNav from "../shared/LeftsideNav/LeftSideNav";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews/BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const Home = () => {
  const news = useLoaderData([]); 
  console.log(news);

  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border-4">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2 border-2">
          {
            news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
          }
        </div>
        <div className="border-2">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
