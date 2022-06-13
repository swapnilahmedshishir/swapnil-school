import React from "react";
import "./Data.css";

const Data = (props) => {
  const { name, picture, title, price } = props.fackData;
  //console.log(props);

  return (
    <div>
      <div className="grid-style">
        <div className="card">
          <img src={picture} alt="" className="image-style" />
          <br />
          <h3 style={{ color: "#5168cc" }}>{title}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            eveniet ipsum voluptates sint id consectetur ipsa facilis dolores,
            exercitationem ratione
          </p>
          <div className="price">
            <span style={{ color: "red" }}>$ {price}</span>
            <span>
              Author: <span style={{ color: "purple" }}>{name}</span>
            </span>
          </div>
          <button className="btn-enroll" onClick={() => props.Enroll(props.fackData) }> Enroll Now </button>
        </div>
      </div>
    </div>
  );
};

export default Data;
