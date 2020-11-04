import * as React from "react";

export const BodySmall = (props) => (
  <span style={{ fontSize: "0.9em" }}>{props.children}</span>
);

export const Large = (props) => (
  <span
    style={{
      fontSize: "1.5em",
      fontWeight: "bold",
      textTransform: "uppercase",
    }}
  >
    {props.children}
  </span>
);

export const Caption = (props) => (
  <span style={{ fontSize: "0.75em" }}>{props.children}</span>
);

export const Caption2 = (props) => (
  <span style={{ fontSize: "0.6875em", opacity: "0.8" }}>{props.children}</span>
);
