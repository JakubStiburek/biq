import React from 'react';
import { Center } from "@chakra-ui/react";
import Controls from "./components/Controls";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Center>
        <Controls/>
      </Center>
    </Provider>
  );
}

export default App;
