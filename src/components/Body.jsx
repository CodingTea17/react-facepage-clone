import React from "react";
import {  } from 'reactstrap';
import Leftpane from "./Leftpane"
import Middlepane from "./Middlepane"
import Rightpane from "./Rightpane"
function Body(props){
  return(
    <div className="row mr-2 ml-2 mt-2 mb-2">
      <Leftpane/>
      <Middlepane/>
      <Rightpane/>
    </div>
  );
}

export default Body;
