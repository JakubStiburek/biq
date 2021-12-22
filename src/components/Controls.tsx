import { Box } from "@mui/material";
import SelectValue from "./SelectValue";
import SliderValue from "./SliderValue";
import { Heading, Text } from "@chakra-ui/react";
import { setAmountValue } from "../redux/amountSlice";
import { setTermValue } from "../redux/termSlice";
import { useQuery } from "react-query";
import { baseUrl, endpoints } from "../urls";
import Result from "./Result";
import React from "react";

const Controls = () => {
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
        marginTop: 10
      }}>
      <Heading>Amount</Heading>
      <SelectValue defaultValue={amountInterval.defaultValue} min={amountInterval.min} max={amountInterval.max}
                   step={amountInterval.step} name="amount" action={setAmountValue}/>
      <SliderValue defaultValue={amountInterval.defaultValue} min={amountInterval.min} max={amountInterval.max}
                   step={amountInterval.step} name="amount" action={setAmountValue}/>
      <Heading>Term</Heading>
      <SelectValue defaultValue={termInterval.defaultValue} min={termInterval.min} max={termInterval.max}
                   step={termInterval.step} name="term" action={setTermValue}/>
      <SliderValue defaultValue={termInterval.defaultValue} min={termInterval.min} max={termInterval.max}
                   step={termInterval.step} name="term" action={setTermValue}/>
      <Result/>
    </Box>
  )
};

export default Controls;
