import React from 'react';
import { Center, VStack } from "@chakra-ui/react";
import Calculator from "./components/Calculator";
import { Provider } from "react-redux";
import store from "./redux/store";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Center>
          <VStack>
            <Calculator/>
          </VStack>
        </Center>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
