import { HStack, Text } from "@chakra-ui/react";

interface Props {
  heading: string;
  value: string;
}

const ResultItem = ({ heading, value}: Props) => {
  return (
    <HStack>
      <Text fontWeight={200}>{heading}:</Text>
      <Text>{value}</Text>
    </HStack>
  )
};

export default ResultItem;
