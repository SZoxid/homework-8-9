"use client";

import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Sicks() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      { country: "USA", totalCases: 500000, totalDeaths: 15000 },
      { country: "Spain", totalCases: 450000, totalDeaths: 14000 },
      { country: "Italy", totalCases: 420000, totalDeaths: 13000 },
      { country: "France", totalCases: 300000, totalDeaths: 9000 },
      { country: "Germany", totalCases: 270000, totalDeaths: 8000 },
      { country: "UK", totalCases: 250000, totalDeaths: 7000 },
      { country: "Russia", totalCases: 240000, totalDeaths: 6500 },
      { country: "Brazil", totalCases: 230000, totalDeaths: 6400 },
      { country: "India", totalCases: 220000, totalDeaths: 6300 },
      { country: "Turkey", totalCases: 210000, totalDeaths: 6200 },
    ]);
  }, []);

  const chartData = {
    labels: data.map((item) => item.country),
    datasets: [
      {
        label: "Total Cases",
        data: data.map((item) => item.totalCases),
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Total Deaths",
        data: data.map((item) => item.totalDeaths),
        fill: true,
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "COVID-19 Statistics",
      },
    },
  };

  return (
    <div className="text-white font-sans">
      <div className="p-4">
        <Line data={chartData} options={chartOptions} />
      </div>

      <div className="overflow-x-auto p-4 text-[gray]">
        <h2 className="text-lg font-bold text-center p-2">
          COVID-19 Statistics
        </h2>
        <table className="w-full">
          <thead>
            <tr className="border">
              <th className="px-4 py-2">Country</th>
              <th className="px-4 py-2">Total Cases</th>
              <th className="px-4 py-2">Total Deaths</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{item.country}</td>
                <td className="px-4 py-2">
                  {item.totalCases.toLocaleString()}
                </td>
                <td className="px-4 py-2">
                  {item.totalDeaths.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
