import { Box } from "@mui/material";
import { useQuery } from "react-query";
import { baseUrl, endpoints } from "../urls";
import { Heading, Text, VStack } from "@chakra-ui/react";
import ResultItem from "./ResultItem";
import { useSelector } from "react-redux";


const Result = () => {
  const amount = useSelector((state: any) => state.amount.value)
  const term = useSelector((state: any) => state.term.value)

  const {isLoading, error, data} = useQuery("result", () =>
    fetch(
      `${baseUrl}${endpoints.realLoan}?amount=${amount}&term=${term}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  if (error) {
    return <Text>Error</Text>
  }

  return (
    <Box>
      <VStack>
        <Heading>Your loan</Heading>
        <ResultItem heading="Monthly payment" value={data.monthlyPayment} />
        <ResultItem heading="Term" value={data.term} />
        <ResultItem heading="Total cost of credit" value={data.totalCostOfCredit} />
        <ResultItem heading="Total principal" value={data.totalPrincipal} />
        <ResultItem heading="Total repayable amount" value={data.totalRepayableAmount} />
      </VStack>
    </Box>
  )
};

export default Result;
