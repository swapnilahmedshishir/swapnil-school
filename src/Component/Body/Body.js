import React, { useState } from "react";
import Data from "../DataCourse/Data";
import Header from "../Header/Header";
import FackData from "../../FackData/FackData.json";
import "./Body.css";
const Body = () => {
  const [fackData] = useState(FackData);
  //console.log(fackData);
  const [Enroll, setInroll] = useState([]);
  const enrolItem = (enroll) => {
    let newEnroll = [...Enroll, enroll];
    setInroll(newEnroll);
  };

  return (
    <div>
      <Header SendEnrollData={Enroll}></Header>
      <div className="cards">
        {fackData.map((data) => (
          <Data key={data._id} Enroll={enrolItem} fackData={data}></Data>
        ))}
      </div>
    </div>
  );
};

export default Body;
