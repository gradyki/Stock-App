import "./Home.css";
import { useState } from "react";
import Chart from "../../components/Chart/Chart";

export default function Home(props) {
  const { apple, microsoft, appleDay, microsoftDay } = props;
  const [chartDays, setChartDays] = useState(30);

  let appleInfo = appleDay.data[0];
  let microsoftInfo = microsoftDay.data[0];

  console.log("appleday", appleDay);
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
    <div className="home-container">
      <div className="above-chart">
        <div className="apple-info">
          <h5>Apple</h5>
          <p>
            Current Price: ${appleInfo.last}{" "}
            {`(${
              ((appleInfo.last - appleInfo.close) / appleInfo.close) * 100
            }`.slice(0, 5) + " %)"}
          </p>
          <p>Previous Close: ${appleInfo.close}</p>
          <p>Open: {appleInfo.open}</p>
          <p>Volume: {appleInfo.volume}</p>
        </div>
        <div className="ms-info">
          <h5>Microsoft</h5>
          <p>
            Current Price: ${microsoftInfo.last}{" "}
            {`(${
              ((microsoftInfo.last - microsoftInfo.close) /
                microsoftInfo.close) *
              100
            }`.slice(0, 5) + " %)"}
          </p>
          <p>Previous Close: ${microsoftInfo.close}</p>
          <p>Open: {microsoftInfo.open}</p>
          <p>Volume: {microsoftInfo.volume}</p>
        </div>
      </div>
      <div className="chart-container">
        {microsoft && (
          <Chart apple={apple} chartDays={chartDays} microsoft={microsoft} />
        )}
      </div>
      <div className="chart-buttons">
        <p onClick={setSeven}>7 days</p>
        <p onClick={setThirty}>30 days</p>
        <p onClick={setHundred}>100 days</p>
      </div>
    </div>
  );
}
