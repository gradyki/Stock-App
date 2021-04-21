import "./Chart.css";
import { Line } from "react-chartjs-2";
import { dateConverter } from "../../utils/index";

export default function Chart(props) {
  const { apple, chartDays } = props;

  let line = [...apple.data].reverse();
  let test = [...apple.data].slice(0, chartDays).reverse();

  console.log("test", test);

  console.log("line", line);

  const dates = test.map((day) => {
    return dateConverter(day.date);
  });

  const closes = test.map((day) => {
    return day.close;
  });

  // console.log("these are the dates", dates);
  // console.log("closes", closes);

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Closing price",
        data: closes,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  };

  // apple.data.map((day) => {
  //   console.log(day.close);
  // });
  return (
    <div className="chart-container">
      line test
      <Line data={data} options={options} />
    </div>
  );
}
