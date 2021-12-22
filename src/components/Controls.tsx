import { Box } from "@mui/material";
import React from "react";
import { valueProps } from "../interfaces/valueProps";
import SelectValue from "./SelectValue";
import SliderValue from "./SliderValue";
import { Heading } from "@chakra-ui/react";
import capitalize from "../utils/capitalize";

const Controls: React.FC<valueProps> = (props) => {
  return (
    <Box>
      <Heading>{capitalize(props.name)}</Heading>
      <SelectValue {...props} />
      <SliderValue {...props} />
    </Box>
  )
};

export default Controls;
