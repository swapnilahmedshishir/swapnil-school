import React from "react";
import "./Header.css";
import Input from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const reciveEnrollData = props.SendEnrollData;

  let EnrollData = 0;
  for (let i = 0; i < reciveEnrollData.length; i++) {
    const cartData = reciveEnrollData[i];
    EnrollData += cartData.price;
  }

  return (
    <div className="header">
      <div className="input-field">
        <Input.Control
          type="text"
          id="inputPassword5"
          placeholder="Search Your Favorite Course ...."
        />
      </div>
      <div className="shoping">
        <span>
          {" "}
          Price <span className="price_total">
            ${Math.round(EnrollData)}{" "}
          </span>{" "}
        </span>
        <FontAwesomeIcon icon={faCartShopping} id="faCart" />
        <span className="cart-value">{reciveEnrollData.length}</span>
      </div>
    </div>
  );
};

export default Header;
