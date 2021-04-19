import { useState } from "react";
import Chart from "../../components/Chart/Chart";

export default function Home(props) {
  const { apple } = props;

  console.log("home apple", apple);

  return (
    <div>
      <Chart apple={apple} />
    </div>
  );
}
