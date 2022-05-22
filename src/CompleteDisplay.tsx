import React, { FC, HtmlHTMLAttributes } from "react";
import { useSelector } from "react-redux";

type display2 = HtmlHTMLAttributes<HTMLHtmlElement>;
const CompleteDisplay: FC<display2> = (props) => {
  const completeCount = useSelector((s: any) => s.completed);
  return (
    <h1>
      Completed :<span className="text-green-500 ml-1">{completeCount}</span>
    </h1>
  );
};
export default CompleteDisplay;
