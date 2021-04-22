import "./Home.css";
import { useState } from "react";
import Chart from "../../components/Chart/Chart";

export default function Home(props) {
  const { apple, quote } = props;
  const [chartDays, setChartDays] = useState(30);

  const setSeven = () => {
    setChartDays(7);
  };

  const setThirty = () => {
    setChartDays(30);
  };

  const setHundred = () => {
    setChartDays(100);
  };

  return (
    <div>
      {quote && <Chart apple={apple} chartDays={chartDays} quote={quote} />}
      <div className="chart-buttons">
        <p onClick={setSeven}>7 days</p>
        <p onClick={setThirty}>30 days</p>
        <p onClick={setHundred}>100 days</p>
      </div>
    </div>
  );
}
