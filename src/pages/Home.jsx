import React from "react";
import Title from "../components/Title";
import HomeImage from "../components/HomeImage";

function Home() {
  return (
      <div className="page-home flex"> 
        <Title />
        <HomeImage />
      </div>
  );
}

export default Home;
