import { render } from "enzyme";
import React, { useState, useEffect } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

export const Profile = () => {
  const [finalData, setFinalData] = useState([
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
  ]);
  // const [activeIndex, setActiveIndex] = useState(null);
  // const workingData = [];


  useEffect(() => {
    console.log("in useEffect");
    fetchData();
    // fetch("/postQuestionnaire/getUserResults")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("data: ", data);
    //     const pieChartData = data.results[0];
    //     console.log("piechartdata: ", pieChartData);
    //     const workingData = [];
    //     workingData.push({
    //       name: "mobility_kg",
    //       value: Number(pieChartData.mobility_kg).toFixed(0)
    //     });
    //     workingData.push({
    //       name: "consumption_kg",
    //       value: Number(pieChartData.consumption_kg).toFixed(0),
    //     });
    //     workingData.push({
    //       name: "household_kg",
    //       value: Number(pieChartData.household_kg).toFixed(0),
    //     });
    //     workingData.push({
    //       name: "home_kg",
    //       value: Number(pieChartData.household_kg).toFixed(0),
    //     });
    //     console.log("working data line 57", workingData);
    //     setFinalData(workingData);
    //     // render()
    //   });
  }, []);

  const fetchData = () => {
    fetch("/postQuestionnaire/getUserResults")
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        const pieChartData = data.results[0];
        console.log("piechartdata: ", pieChartData);
        const workingData = [];
        workingData.push({
          name: "mobility_kg",
          value: parseInt(Number(pieChartData.mobility_kg).toFixed(0)+0)
        });
        workingData.push({
          name: "consumption_kg",
          value: parseInt(Number(pieChartData.consumption_kg).toFixed(0)+0),
        });
        workingData.push({
          name: "household_kg",
          value: parseInt(Number(pieChartData.household_kg).toFixed(0)+0),
        });
        console.log("working data line 57", workingData);
        setFinalData(workingData);
        // render()
      });
  }

  console.log(typeof finalData[0].value);

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
        <h1 id="tableTitle">Your Footprint</h1>
      </header>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
        <PieChart width={900} height={900}>
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
      {/* {finalData  || 'hello'} */}
    </div>
  );
};
