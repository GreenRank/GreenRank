import React, { useState, useEffect } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

export const Profile = () => {
  const [finalData, setFinalData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const dummyData = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const workingData = [];
  useEffect(() => {
    console.log("in useEffect");
    fetch("/postQuestionnaire/getUserResults")
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        const pieChartData = data.results[0];
        console.log("piechartdata: ", pieChartData);
        workingData.push({
          name: "mobility_kg",
          value: [pieChartData.mobility_kg],
        });
        workingData.push({
          name: "consumption_kg",
          value: pieChartData.consumption_kg,
        });
        workingData.push({
          name: "household_kg",
          value: pieChartData.household_kg,
        });
        // setFinalData((finalData) => [
        //   ...finalData,
        //   {
        //     name: "mobility_kg",
        //     value: pieChartData.mobility_kg,
        //   },
        // ]);
        // setFinalData((finalData) => [
        // ...finalData,
        //   {
        //     name: "consumption_kg",
        //     value: pieChartData.consumption_kg,
        //   },
        // ]);
        // setFinalData((finalData) => [
        //   ...finalData,
        //   {
        //     name: "household_kg",
        //     value: pieChartData.household_kg,
        //   },
        // ]);
        console.log("working data line 57", workingData);
        setFinalData(workingData);
        console.log(finalData);
      });
  }, []);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div>
      <header>
        <h1 id="tableTitle">Your Footprint...working-data-array is -> {workingData}</h1>

      </header>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      {/* <PieChart id="tableTitle" id="pieChart" width={400} height={400}> */}
      <PieChart width={400} height={400}>
        <Pie
          data={finalData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {finalData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
};
