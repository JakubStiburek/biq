import { Text } from "@chakra-ui/react";
import _ from "lodash";
import { Grid } from "@mui/material";

interface Props {
  heading: string;
  value: string;
}

const ResultItem = ({ heading, value}: Props) => {
  return (
    <Grid container columns={2} justifyContent="space-between">
      <Grid item>
        <Text fontWeight={200}>{_.startCase(heading)}:</Text>
      </Grid>
      <Grid item>
        <Text>{value}</Text>
      </Grid>
    </Grid>
  )
};

export default ResultItem;
