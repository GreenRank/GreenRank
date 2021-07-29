import { render } from "enzyme";
import React, { useState, useEffect } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from "recharts";

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
  const getIntroOfPage = (label) => {
    if (label == 'mobility_kg') {
      return "You move too much";
    }
    if (label == 'consumption_kg') {
      return "You eat too much";
    }
    if (label == 'household_kg') {
      return "Your house hates the Earth";
    }
    return 'be better!';
  };
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      console.log('payload: ',payload)
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].name} : ${payload[0].value}kg`}</p>
          <p className="intro">{getIntroOfPage(label)}</p>
          <p className="desc">Mother Earth is dyin' ova here.</p>
        </div>
      );
    }
  
    return null;
  };
  return (
    <div id='profile-component'>
      <header>
        <h1 id="tableTitle">Your Footprint</h1>
      </header>
      <PieChart width={400} height={400} id='pie-chart'>
        <Pie
            data={finalData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={200}
            fill="#8884d8"
            dataKey="value"
            >
          {finalData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
        <Tooltip id='custom-tooltip' content={<CustomTooltip />} />

      </PieChart>
    </div>
  );
};
