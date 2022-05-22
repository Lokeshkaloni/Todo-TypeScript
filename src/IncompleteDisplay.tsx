import React, { FC, HtmlHTMLAttributes } from "react";

type display = HtmlHTMLAttributes<HTMLHtmlElement>;
const IncompleteDisplay: FC<display> = (props) => {
  return (
    <h1>
      Incomplete :<span className="text-red-500 ml-1">{props.children}</span>
    </h1>
  );
};

export default IncompleteDisplay;
