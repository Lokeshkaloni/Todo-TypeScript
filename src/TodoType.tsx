import { HtmlHTMLAttributes } from "react";

export type todoRowProps = {
  done: boolean;
  onStatusChange: (todo: any) => void;
} & HtmlHTMLAttributes<HTMLHtmlElement>;

export type todos = { id: number; title: string; done: boolean };
