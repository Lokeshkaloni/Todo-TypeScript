import React from "react";

function Header(props) {
  return (
    <div className="font-bold text-xl border py-3">
      <h1 className="px-4">{props.children}</h1>
    </div>
  );
}
export default Header;
