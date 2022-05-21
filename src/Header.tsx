import React, { FC, HtmlHTMLAttributes } from "react";
type headerProps = HtmlHTMLAttributes<HTMLHtmlElement>;
const Header: FC<headerProps> = (props) => {
  return (
    <div className="font-bold text-xl border py-3">
      <h1 className="px-4">{props.children}</h1>
    </div>
  );
};
export default Header;
