import React, { FC, HtmlHTMLAttributes } from "react";

type display2 = HtmlHTMLAttributes<HTMLHtmlElement>;
const CompleteDisplay: FC<display2> = (props) => {
  return (
    <h1>
      Completed :<span className="text-green-500 ml-1">{props.children}</span>
    </h1>
  );
};
export default CompleteDisplay;
