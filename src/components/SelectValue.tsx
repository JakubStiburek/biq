import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";
import getSteps from "../utils/getSteps";
import { useDispatch, useSelector } from "react-redux"
import { valueProps } from "../interfaces/valueProps";
import { setAmountValue } from "../redux/amountSlice";

const SelectValue: React.FC<valueProps> = ({defaultValue, min, max, step, name}) => {
  const dispatch = useDispatch();

  const menuItems = getSteps(min, max, step).map((item) => <MenuItem value={item}>{item}</MenuItem>);
  const handleChange = (event: SelectChangeEvent<number>) => {
    dispatch(setAmountValue(event.target.value));
  }

  const newValue = useSelector((state: any) => state[name].value);
  const value = newValue === 0 ? defaultValue : newValue


  return (
    <FormControl fullWidth>
      <InputLabel id="amount">Amount</InputLabel>
      <Select
        labelId="amountLabel"
        id="amountSelect"
        value={value}
        label="Amount"
        onChange={handleChange}
      >
        {menuItems}
      </Select>
    </FormControl>
  )
};

export default SelectValue;
