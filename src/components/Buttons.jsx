import React from "react";
import { Button } from "@mui/material";

const DefaultButton = ({ variant = "contained", text, ...rest }) => {
  return <Button variant={variant} {...rest}>{text}</Button>;
};

export { DefaultButton as Button };
