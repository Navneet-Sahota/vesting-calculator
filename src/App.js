import React from "react";
import { Container, Header } from "semantic-ui-react";

import "./App.css";
import VestingInputForm from "./VestingInputForm";

function App() {
  return (
    <Container>
      <Header as="h1" className="center">
        Vesting Calculator
      </Header>
      <VestingInputForm />
    </Container>
  );
}

export default App;
