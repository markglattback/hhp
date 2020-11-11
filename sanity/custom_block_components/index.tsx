import * as React from "react";
import { ReactNode } from "react";

export type Props = {
  children: ReactNode;
}

export const NewLineIcon = () => (
  <span style={{ fontWeight: "bold" }}>New Line</span>
);

export const NewLineRender = () => (
  <span style={{ opacity: 0.2 }}>{"-> new line"}</span>
);

export const NoSpacingIcon = () => (
  <span style={{ fontWeight: "bold" }}>NS</span>
);

export const NoSpacingRender = (props: Props) => (
  <span style={{ margin: "0" }}>{props.children}</span>
);

export const YellowTextIcon = () => (
  <span style={{ fontWeight: "bold", color: "#ff0" }}>{"\u25A0"}</span>
);

export const YellowTextRender = (props: Props) => (
  <span style={{ color: "#ff0" }}>{props.children}</span>
);
