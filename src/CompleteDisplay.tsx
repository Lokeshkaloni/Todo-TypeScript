import { FC, HtmlHTMLAttributes } from "react";
import { useSelector } from "react-redux";
import { state } from "./Store";

type display2 = HtmlHTMLAttributes<HTMLHtmlElement>;
const CompleteDisplay: FC<display2> = (props) => {
  const completeCount = useSelector((s: state) => s.completed);
  return (
    <h1>
      Completed :<span className="text-green-500 ml-1">{completeCount}</span>
    </h1>
  );
};
export default CompleteDisplay;
