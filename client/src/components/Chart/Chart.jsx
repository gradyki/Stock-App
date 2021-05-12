import "./Chart.css";
import { Line } from "react-chartjs-2";
import { dateConverter } from "../../utils/index";

export default function Chart(props) {
  const { apple, chartDays, microsoft } = props;

  // console.log("microsoft", microsoft);
  // console.log("apple", apple);

  let microsoftLine = [...microsoft.data].slice(0, chartDays).reverse();
  let appleLine = [...apple.data].slice(0, chartDays).reverse();

  // console.log("test", test);

  // console.log("line", line);

  const msDates = microsoftLine.map((day) => {
    return dateConverter(day.date);
  });

  const msCloses = microsoftLine.map((day) => {
    return day.close;
  });

  const aapleDates = appleLine.map((day) => {
    return dateConverter(day.date);
  });

  const appleCloses = appleLine.map((day) => {
    return day.close;
  });

  // console.log("these are the dates", dates);
  // console.log("closes", closes);

  const data = {
    labels: msDates,
    datasets: [
      {
        label: `${microsoft.data[0].symbol}`,
        data: msCloses,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: `${apple.data[0].symbol}`,
        data: appleCloses,
        fill: false,
        backgroundColor: "rgb(0, 255, 255)",
        borderColor: "rgb(0, 255, 255, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
            responsive: true,
            maintainAspectRatio: true,
          },
        },
      ],
    },
  };

  // apple.data.map((day) => {
  //   console.log(day.close);
  // });
  return (
    <div className="chart">
      <Line data={data} options={options} />
    </div>
  );
}
