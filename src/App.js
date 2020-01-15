import React from "react";
import { Container, Header } from "semantic-ui-react";

import "./App.css";
import VestingInputForm from "./VestingInputForm";
import VestingSchedule from "./VestingSchedule";

function App() {
  return (
    <Container>
      <Header as="h1" className="center">
        Vesting Calculator
      </Header>
      <VestingInputForm />
      <VestingSchedule />
    </Container>
  );
}

export default App;
