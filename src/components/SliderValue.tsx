import { Slider } from "@mui/material";
import { valueProps } from "../interfaces/valueProps";
import React from "react";

const SliderValue: React.FC<valueProps> = ({defaultValue, min, max, step, name}) => {
  return (
    <Slider
      key={name}
      aria-label="Temperature"
      defaultValue={defaultValue}
      valueLabelDisplay="auto"
      step={step}
      marks
      min={min}
      max={max}
    />
  )
};

export default SliderValue;
