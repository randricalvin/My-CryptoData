import React from "react";
import Title from "../components/Title";
import HomeImage from "../components/HomeImage";
import ButtonStart from "../components/ButtonStart";
import bg from "../assets/bg.svg";

function Home() {
  return (
    <div>
            {/* <img src={bg} alt="background" className="background" /> */}
            <div className="page-home flex font-sans">
              <div className="flex flex-col ">
                <Title />
                <ButtonStart />
              </div> 
                <HomeImage />
            </div>
    </div>  
  );
}

export default Home;
