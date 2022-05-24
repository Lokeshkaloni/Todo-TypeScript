import { HtmlHTMLAttributes } from "react";

export type todoRowProps = {
  done: boolean;
  onStatusChange: (todo: any) => void;
  key: any;
} & HtmlHTMLAttributes<HTMLHtmlElement>;
