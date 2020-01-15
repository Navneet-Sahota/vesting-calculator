import React, { useState } from "react";
import { Container, Header } from "semantic-ui-react";

import "./App.css";
import VestingInputForm from "./VestingInputForm";
import VestingSchedule from "./VestingSchedule";

function App() {
  const [shares, setShares] = useState();
  const [vestingPeriod, setVestingPeriod] = useState();
  const [cliff, setCliff] = useState();
  const [showVestingSchedule, setShowVestingSchedule] = useState(false);

  function handleSubmit(shares, vestingPeriod, cliff) {
    setShares(shares);
    setVestingPeriod(vestingPeriod);
    setCliff(cliff);
    setShowVestingSchedule(true);
  }

  return (
    <Container>
      <Header as="h1" className="center">
        Vesting Calculator
      </Header>
      <VestingInputForm handleSubmit={handleSubmit} />
      {showVestingSchedule ? (
        <VestingSchedule
          shares={shares}
          vestingPeriod={vestingPeriod}
          cliff={cliff}
        />
      ) : null}
    </Container>
  );
}

export default App;
