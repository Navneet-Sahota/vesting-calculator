import React from "react";
import { Table } from "semantic-ui-react";

const VestingSchedule = ({ shares, vestingPeriod, cliff }) => {
  const actualVestedAfterCliff = shares * (cliff / vestingPeriod);
  const actualSharePerMonth = shares / vestingPeriod;
  let remainingFraction = actualVestedAfterCliff % 1;

  function calculateRemainingFraction() {
    remainingFraction = remainingFraction % 1;
    remainingFraction = remainingFraction + (actualSharePerMonth % 1);
    return (remainingFraction % 2).toFixed(3);
  }

  const rows = [];
  for (let i = 0; i < vestingPeriod; i += 1) {
    rows.push(
      <Table.Row className="right" key={i}>
        <Table.Cell>{i + 1}</Table.Cell>
        <Table.Cell>
          {i < cliff
            ? (0).toFixed(3)
            : i === cliff
            ? actualVestedAfterCliff.toFixed(3)
            : actualSharePerMonth.toFixed(3)}
        </Table.Cell>
        <Table.Cell>
          {i < cliff
            ? (0).toFixed(3)
            : i === cliff
            ? (actualVestedAfterCliff % 1).toFixed(3)
            : (actualSharePerMonth % 1).toFixed(3)}
        </Table.Cell>
        <Table.Cell>
          {i < cliff
            ? (0).toFixed(3)
            : i === cliff
            ? remainingFraction.toFixed(3)
            : calculateRemainingFraction()}
        </Table.Cell>
        <Table.Cell>
          {i < cliff
            ? (0).toFixed(3)
            : i === cliff
            ? Math.floor(actualVestedAfterCliff).toFixed(3)
            : calculateRemainingFraction() > 1
            ? Math.floor(1 + actualSharePerMonth).toFixed(3)
            : Math.floor(actualSharePerMonth).toFixed(3)}
        </Table.Cell>
        <Table.Cell>
          {i < cliff
            ? (0).toFixed(2)
            : (
                actualVestedAfterCliff +
                actualSharePerMonth * (i - cliff)
              ).toFixed(2)}
        </Table.Cell>
        <Table.Cell>
          {i < cliff
            ? (0).toFixed(2)
            : Math.floor(
                actualVestedAfterCliff + actualSharePerMonth * (i - cliff)
              ).toFixed(2)}
        </Table.Cell>
      </Table.Row>
    );
  }

  return (
    <Table style={{ marginBottom: "10%" }} celled>
      <Table.Header>
        <Table.Row className="right">
          <Table.HeaderCell>Period</Table.HeaderCell>
          <Table.HeaderCell>per period (actual)</Table.HeaderCell>
          <Table.HeaderCell>Fractional Remaining</Table.HeaderCell>
          <Table.HeaderCell>Remaining Fraction</Table.HeaderCell>
          <Table.HeaderCell>Vest @ Time (rounded)</Table.HeaderCell>
          <Table.HeaderCell>Cumulative Vested (actual)</Table.HeaderCell>
          <Table.HeaderCell>Cumulative Vested (rounded)</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>{rows}</Table.Body>
    </Table>
  );
};

export default VestingSchedule;
