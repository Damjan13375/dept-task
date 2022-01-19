import React from "react";
import { Button } from "@chakra-ui/react";

const DefaultButton = ({ text, ...rest}) => {
  return <Button {...rest}>{text}</Button>;
};

export { DefaultButton as Button };
