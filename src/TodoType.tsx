import { HtmlHTMLAttributes } from "react";

export type todoRowProps = {
  todo: todo;
  onStatusChange: (id: number, done: boolean) => void;
} & HtmlHTMLAttributes<HTMLHtmlElement>;

export type todo = { id: number; title: string; done: boolean };
