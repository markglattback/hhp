import * as React from "react";
import { Props } from ".";

export const BodySmall = (props: Props) => (
  <span style={{ fontSize: "0.9em" }}>{props.children}</span>
);

export const Large = (props: Props) => (
  <span
    style={{
      fontSize: "1.5em",
      fontWeight: "bold",
    }}
  >
    {props.children}
  </span>
);

export const LargeCaps = (props: Props) => (
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

export const Caption = (props: Props) => (
  <span style={{ fontSize: "0.75em" }}>{props.children}</span>
);

export const Caption2 = (props: Props) => (
  <span style={{ fontSize: "0.6875em", opacity: "0.8" }}>{props.children}</span>
);
