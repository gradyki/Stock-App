import "./Chart.css";
import { Line } from "react-chartjs-2";

export default function Chart(props) {
  const { apple } = props;

  console.log("line", apple);
  const dates = apple.data.map((day) => {
    return day.date;
  });

  const closes = apple.data.map((day) => {
    return day.close;
  });

  console.log("these are the dates", dates);
  console.log("closes", closes);

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
            beginAtZero: true,
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
