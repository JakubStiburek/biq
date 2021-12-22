import { Box } from "@mui/material";
import { Text } from "@chakra-ui/react";
import { setAmountValue } from "../redux/amountSlice";
import { setTermValue } from "../redux/termSlice";
import { useQuery } from "react-query";
import { baseUrl, endpoints } from "../urls";
import Result from "./Result";
import React from "react";
import Controls from "./Controls";

const Calculator = () => {
  const { isLoading, error, data } = useQuery("constrains", () =>
    fetch(
      `${baseUrl}${endpoints.constraints}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  if (error) {
    return <Text>Error</Text>
  }

  const { amountInterval, termInterval } = data;

  return (
    <Box
      sx={{
        width: 300,
        height: 'max-content',
        marginTop: 5,
        padding: 5,
        boxShadow: 3,
        borderRadius: 3
      }}>
      <Controls defaultValue={amountInterval.defaultValue} min={amountInterval.min} max={amountInterval.max}
                step={amountInterval.step} name="amount" action={setAmountValue}/>
      <Controls defaultValue={termInterval.defaultValue} min={termInterval.min} max={termInterval.max}
                step={termInterval.step} name="term" action={setTermValue}/>
      <Result defaultAmount={amountInterval.defaultValue} defaultTerm={termInterval.defaultValue}/>
    </Box>
  )
};

export default Calculator;
