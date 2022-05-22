import React, { FC, HtmlHTMLAttributes } from "react";
import { useSelector } from "react-redux";

type display = HtmlHTMLAttributes<HTMLHtmlElement>;
const IncompleteDisplay: FC<display> = (props) => {
  const incompleteCount = useSelector((s: any) => s.incomplete);
  return (
    <h1>
      Incomplete :<span className="text-red-500 ml-1">{incompleteCount}</span>
    </h1>
  );
};

export default IncompleteDisplay;
