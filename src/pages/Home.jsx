import React from "react";
import Title from "../components/Title";
import HomeImage from "../components/HomeImage";
import ButtonStart from "../components/ButtonStart";

function Home() {
  return (
    <div>
            <div className="page-home flex font-sans"> 
              <div className="flex flex-col">
                <Title />
                <ButtonStart />
              </div> 
                <HomeImage />
            </div>
    </div>  
  );
}

export default Home;
