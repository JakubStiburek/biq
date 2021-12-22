import { Slider } from "@mui/material";
import { valueProps } from "../interfaces/valueProps";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { setAmountValue } from "../redux/amountSlice";
import { useDispatch, useSelector } from "react-redux";

const SliderValue: React.FC<valueProps> = ({ defaultValue, min, max, step, name }) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState(defaultValue)

  const handleChangeCommitted = (event: Event | SyntheticEvent<Element, Event>, value: number | number[]) => {
    dispatch(setAmountValue(value));
  }

  const handleChange = (event: any) => {
    setValue(event.target.value);
  }

  const newValue = useSelector((state: any) => state[name].value);

  useEffect(() => {
    if(newValue > 0) setValue(newValue);
  }, [newValue])

  return (
    <Slider
      defaultValue={value}
      value={value}
      valueLabelDisplay="auto"
      step={step}
      marks
      min={min}
      max={max}
      onChange={handleChange}
      onChangeCommitted={handleChangeCommitted}
    />
  )
};

export default SliderValue;
