import React from "react";

function Card(props) {
  return <div className="shadow p-2">{props.children}</div>;
}
export default Card;
