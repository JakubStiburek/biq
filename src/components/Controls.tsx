import {Box} from "@mui/material";
import SelectValue from "./SelectValue";
import SliderValue from "./SliderValue";
import { Heading } from "@chakra-ui/react";

const Controls = () => {
  return (
    <Box
      sx={{
        width: 300,
        height: 'max-content',
        marginTop: 10
      }}>
      <Heading>Amount</Heading>
      <SelectValue defaultValue={150} min={50} max={1000} step={50} name="amount"/>
      <SliderValue defaultValue={150} min={50} max={1000} step={50} name="amount"/>
      {/*<Heading>Term</Heading>*/}
      {/*<SelectValue defaultValue={150} min={50} max={1000} step={50} name="select"/>*/}
      {/*<SliderValue defaultValue={150} min={50} max={1000} step={50} name="slider"/>*/}
    </Box>
  )
};

export default Controls;
