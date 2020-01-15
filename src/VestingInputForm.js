import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";

const VestingInputForm = ({ handleSubmit }) => {
  const [shares, setShares] = useState();
  const [vestingPeriod, setVestingPeriod] = useState();
  const [cliff, setCliff] = useState();
  const [vestingStartDate, setVestingStartDate] = useState();

  return (
    <Form onSubmit={() => handleSubmit(shares, vestingPeriod, cliff)}>
      <Form.Group widths="equal">
        <Form.Input
          value={shares}
          onChange={e => setShares(e.target.value)}
          fluid
          type="number"
          id="total-shares"
          label="Total Number of Shares"
          placeholder="Total Number of Shares"
        />
        <Form.Input
          value={vestingPeriod}
          onChange={e => setVestingPeriod(e.target.value)}
          fluid
          type="number"
          id="vesting-period"
          label="Vesting Period (in months)"
          placeholder="Vesting Period (in months)"
        />
        <Form.Input
          value={cliff}
          onChange={e => setCliff(e.target.value)}
          fluid
          type="number"
          id="cliff"
          label="Cliff (in months)"
          placeholder="Cliff (in months)"
        />
        <Form.Input
          value={vestingStartDate}
          onChange={e => setVestingStartDate(e.target.value)}
          fluid
          type="date"
          id="starting-vest-date"
          label="Starting Vest Date"
        />
      </Form.Group>
      <Form.Field className="center" control={Button}>
        Submit
      </Form.Field>
    </Form>
  );
};

export default VestingInputForm;
