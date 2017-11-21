import React from "react";
import Profile from "./Profile"
import About from "./About"

function Leftpane(props){
  return (
    <div className="col-4">
      <Profile/>
      <About/>
    </div>
  );
}

export default Leftpane;
