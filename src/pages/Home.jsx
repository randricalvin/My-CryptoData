import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import HomeImage from "../components/HomeImage";
import ButtonStart from "../components/ButtonStart";
import Loader from "../components/Loader";

function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  return loading ? (
    <Loader />
  ) : (
    <div>
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
