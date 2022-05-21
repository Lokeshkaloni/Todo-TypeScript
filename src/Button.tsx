import React, { ButtonHTMLAttributes, FC } from "react";
type buttonProps = {
  theme?: "secondary";
  border?: "full";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<buttonProps> = (props) => {
  let themeClass =
    "bg-yellow-400 text-white hover:bg-yellow-600 border-yellow-400";
  if (props.theme === "secondary") {
    themeClass = "bg-white border border-gray-300";
  }
  let borderClass = "rounded-md";
  if (props.border === "full") {
    borderClass = "rounded-full";
  }
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={"ml-4 px-2 py-1 " + themeClass + "  " + borderClass}
    >
      {props.children}
    </button>
  );
};
export default Button;
