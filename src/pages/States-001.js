import "../css/States.css";
import { useState } from "react";
const States001 = () => {
  const [isdark,setIsdark]=useState(0);
  return (
    <div >
      <h1>States-001</h1>
      
      <div className={isdark ? "dark" :"light"}>
        <div className="header">
          <h1>Overreacted</h1>
          <button onClick={()=>{setIsdark(!isdark)}}>toggle</button>
        </div>

        <div className="content">
          <h2>The WET Codebae</h2>
          <p>Sunday,4th, 2020 11min read</p>
          <p>come waste your time with me</p>

          <h2>Goodbay, Clean Code</h2>
          <p>Friday,12th, 2020 5min read</p>
          <p>Let clean code guide you. Then let it go.</p>

          <h2>My Decade in Review</h2>
          <p>Saturday,4th, 2018 9min read</p>
          <p>A personal reflection.</p>
        </div>
      </div>
    </div>
  );
};
export default States001;
