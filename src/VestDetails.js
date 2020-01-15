import React, { useState } from "react";
import { Button, Input, Statistic } from "semantic-ui-react";

const VestDetails = ({ shares, vestingPeriod, cliff, vestingStartDate }) => {
  const [totalShares, setTotalShares] = useState();
  const [specificShares, setSpecificShares] = useState();
  const [vestDetailsDate, setVestDetailsDate] = useState();

  const actualVestedAfterCliff = shares * (cliff / vestingPeriod);
  const actualSharePerMonth = shares / vestingPeriod;
  let remainingFraction = actualVestedAfterCliff % 1;

  function calculateRemainingFraction() {
    remainingFraction = remainingFraction % 1;
    remainingFraction = remainingFraction + (actualSharePerMonth % 1);
    return (remainingFraction % 2).toFixed(3);
  }

  function handleSubmit() {
    const vestStartDate = new Date(vestingStartDate);
    const vestEndDate = new Date(vestDetailsDate);

    const startYear = vestStartDate.getFullYear();
    const startMonth = vestStartDate.getMonth() + 1;
    const startDate = vestStartDate.getDate();

    const endYear = vestEndDate.getFullYear();
    const endMonth = vestEndDate.getMonth() + 1;
    const endDate = vestEndDate.getDate();

    let monthDiff = (endYear - startYear) * 12 + (endMonth - startMonth);
    monthDiff = endDate > startDate ? monthDiff + 1 : monthDiff;
    monthDiff--;

    const totalShares =
      monthDiff < cliff
        ? (0).toFixed(2)
        : Math.floor(
            actualVestedAfterCliff + actualSharePerMonth * (monthDiff - cliff)
          ).toFixed(2);

    const specificShares =
      monthDiff < cliff
        ? (0).toFixed(3)
        : monthDiff === cliff
        ? Math.floor(actualVestedAfterCliff).toFixed(3)
        : calculateRemainingFraction() > 1
        ? Math.floor(1 + actualSharePerMonth).toFixed(3)
        : Math.floor(actualSharePerMonth).toFixed(3);
    setTotalShares(totalShares);
    setSpecificShares(specificShares);
  }

  return (
    <div className="block-el center">
      <Input
        required
        onChange={e => setVestDetailsDate(e.target.value)}
        type="date"
        id="vest-details-date"
        label="Future Vest Date"
      />
      <div className="block-el center">
        <Button disabled={!vestDetailsDate} onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      {
        <>
          <Statistic
            label="Total Number of shares vested"
            value={totalShares}
          />
          <Statistic label="Number of shares vested" value={specificShares} />
        </>
      }
    </div>
  );
};

export default VestDetails;
