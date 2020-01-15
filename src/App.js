import React, { useState } from "react";
import { Container, Header } from "semantic-ui-react";

import "./App.css";
import VestingInputForm from "./VestingInputForm";
import VestingSchedule from "./VestingSchedule";
import VestDetails from "./VestDetails";

function App() {
  const [shares, setShares] = useState();
  const [vestingPeriod, setVestingPeriod] = useState();
  const [cliff, setCliff] = useState();
  const [vestingStartDate, setVestingStartDate] = useState();
  const [showVestingData, setShowVestingData] = useState(false);

  function handleSubmit(shares, vestingPeriod, cliff, vestingStartDate) {
    setShares(shares);
    setVestingPeriod(vestingPeriod);
    setCliff(cliff);
    setVestingStartDate(vestingStartDate);
    setShowVestingData(true);
  }

  return (
    <Container>
      <Header as="h1" className="extra-space center">
        Vesting Calculator
      </Header>
      <VestingInputForm handleSubmit={handleSubmit} />
      {showVestingData ? (
        <>
          <VestDetails
            shares={shares}
            vestingPeriod={vestingPeriod}
            cliff={cliff}
            vestingStartDate={vestingStartDate}
          />
          <VestingSchedule
            shares={shares}
            vestingPeriod={vestingPeriod}
            cliff={cliff}
          />
        </>
      ) : null}
    </Container>
  );
}

export default App;
