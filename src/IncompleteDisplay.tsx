import { FC, HtmlHTMLAttributes } from "react";
import { useSelector } from "react-redux";
import { state } from "./Store";

type display = HtmlHTMLAttributes<HTMLHtmlElement>;
const IncompleteDisplay: FC<display> = (props) => {
  const incompleteCount = useSelector((s: state) => s.incomplete);
  return (
    <h1>
      Incomplete :<span className="text-red-500 ml-1">{incompleteCount}</span>
    </h1>
  );
};

export default IncompleteDisplay;
