import { Box, CircularProgress } from "@mui/material";
import { useQuery } from "react-query";
import { baseUrl, endpoints } from "../urls";
import { Heading, Text, VStack } from "@chakra-ui/react";
import ResultItem from "./ResultItem";
import { useSelector } from "react-redux";
import { keys, map, values } from "remeda";

interface Props {
  defaultAmount: number;
  defaultTerm: number;
}

const Result = ({defaultAmount, defaultTerm}: Props) => {
  const newAmount = useSelector((state: any) => state.amount.value);
  const amount = newAmount === 0 ? defaultAmount : newAmount;
  const newTerm = useSelector((state: any) => state.term.value)
  const term = newTerm === 0 ? defaultTerm : newTerm;

  const {isLoading, error, data} = useQuery(`result${term}${amount}`, () =>
    fetch(
      `${baseUrl}${endpoints.realLoan}?amount=${amount}&term=${term}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="333.25px"
      >
        <CircularProgress />
      </Box>
    )
  }

  if (error) {
    return <Text>Error</Text>
  }

  const resultItems = map.indexed(values(data),(item: string, key) => <ResultItem key={key} heading={keys(data)[key]} value={item} />)

  return (
    <Box>
      <Heading>Your loan</Heading>
      <VStack>
        {resultItems}
      </VStack>
    </Box>
  )
};

export default Result;
