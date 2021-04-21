import { useState } from "react";
import Chart from "../../components/Chart/Chart";

export default function Home(props) {
  const { apple } = props;

  return <div>{apple && <Chart apple={apple} />}</div>;
}
