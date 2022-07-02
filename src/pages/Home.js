import React from "react";
import NewsItems from "../components/NewsItems";

const Home = () => {
  return (
    <>
      <div className="pb-10 px-0 container mx-auto">
        <h1 className="text-center my-4 font-bold text-4xl">
          NewsyWorld - Top Headlines
        </h1>
        <NewsItems />
      </div>
    </>
  );
};

export default Home;
