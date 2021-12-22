import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import React from "react";
import getSteps from "../utils/getSteps";
import { valueProps } from "../interfaces/valueProps";

const SelectValue: React.FC<valueProps> = ({defaultValue, min, max, step, name}) => {
  console.log(name)
  const menuItems = getSteps(min, max, step).map((item) => <MenuItem value={item}>{item}</MenuItem>)
  return (
    <FormControl fullWidth>
      <InputLabel id="amount">Amount</InputLabel>
      <Select
        labelId="amountLabel"
        id="amountSelect"
        value={defaultValue}
        label="Amount"
      >
        {menuItems}
      </Select>
    </FormControl>
  )
};

export default SelectValue;
