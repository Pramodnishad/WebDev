import React from "react";
import "./UserCard.css";
import Gibli from "../assets/gibli.png";

function UserCard(props) {
  return (
    <div className="card_container" style={props.style}>
      <p>{props.name}</p>
      <img src={Gibli} alt="" className="card_image" />
      <p>{props.desc}</p>
    </div>
  );
}

export default UserCard;
