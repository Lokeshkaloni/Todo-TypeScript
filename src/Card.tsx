import React, { FC, HtmlHTMLAttributes } from "react";

type cardProps = HtmlHTMLAttributes<HTMLHtmlElement>;
const Card: FC<cardProps> = (props) => {
  return <div className="shadow p-2">{props.children}</div>;
};
export default Card;
