import * as React from "react";

export const NewLineIcon = () => (
  <span style={{ fontWeight: "bold" }}>New Line</span>
);

export const NewLineRender = (props) => (
  <span style={{ opacity: 0.2 }}>{"-> new line"}</span>
);

export const NoSpacingIcon = () => (
  <span style={{ fontWeight: "bold" }}>NS</span>
);

export const NoSpacingRender = (props) => (
  <span style={{ margin: "0" }}>{props.children}</span>
);

export const YellowTextIcon = () => (
  <span style={{ fontWeight: "bold", color: "#ff0" }}>{"\u25A0"}</span>
);

export const YellowTextRender = (props) => (
  <span style={{ color: "#ff0" }}>{props.children}</span>
);
