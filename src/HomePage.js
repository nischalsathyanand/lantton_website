import React from "react";


import HomeContent from "./HomeContent";
import RegisterForm from "./RegisterForm";

function HomePage() {
  return (
    <div className="App">
      <div className="main-content">
        <HomeContent/>
       <RegisterForm/>
        
      </div>
    </div>
  );
}

export default HomePage
