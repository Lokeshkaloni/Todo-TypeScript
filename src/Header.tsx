import React, { FC, HtmlHTMLAttributes } from "react";
import CompleteDisplay from "./CompleteDisplay";
import IncompleteDisplay from "./IncompleteDisplay";

type headerProps = HtmlHTMLAttributes<HTMLHtmlElement>;

const Header: FC<headerProps> = (props) => {
  return (
    <div className="border py-3 flex justify-between items-center">
      <h1 className="font-bold text-xl px-4">{props.children}</h1>
      <div className="mr-5 font-medium">
        <CompleteDisplay></CompleteDisplay>
        <IncompleteDisplay></IncompleteDisplay>
      </div>
    </div>
  );
};
export default Header;
