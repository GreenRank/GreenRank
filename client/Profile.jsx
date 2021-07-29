import React, { useState, useEffect, useCallback } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend} from "recharts";


export const Profile = () => {
  const [finalData, setFinalData] = useState([
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
  ]);
  const [userHistory, setUserHistory] = useState([]);
  // const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    console.log("in useEffect");
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("/postQuestionnaire/getUserResults")
      .then((res) => res.json())
      .then((data) => {
        const pieChartData = data.results[data.results.length - 1];

        //configure array for pie chart for user's most recent results
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


        // configure array for bar chart of user history
        const allPastResults = [];
        data.results.forEach((result, index) => {
          allPastResults.push({
            date: new Date(result.date).toDateString(),
            mobility: Number(Math.floor(result.mobility_kg)),
            consumption: Number(Math.floor(result.consumption_kg)),
            household: Number(Math.floor(result.household_kg)) 
          })
        })
        console.log('ALLPASTRESULTS: ', allPastResults)
        setUserHistory(allPastResults);
        // render()
      });
  }

    // trying to add pie chart animation functions
    const [activeIndex, setActiveIndex] = useState(null);
    const onMouseOver = useCallback((finalData, index) => {
      setActiveIndex(index);
    }, []);
    const onMouseLeave = useCallback((finalData, index) => {
      setActiveIndex(null);
    }, []);

  const COLORS = ["#868d4f", "#485852", "#9ca74e", "#485852"];

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

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

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
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
            >
          {finalData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
        <Tooltip id='custom-tooltip' content={<CustomTooltip />} />
      </PieChart>

      {/* <ResponsiveContainer width="100%" height="100%"> */}
        <div id='bar-chart-div'>
          <BarChart
            id='bar-chart'
            width={700}
            height={400}
            data={userHistory}
            margin={{
              top: 0,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign='top'/>
            {/* <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" /> */}
            <Bar dataKey="mobility" fill="#8884d8" />
            <Bar dataKey="consumption" fill="#82ca9d" />
            <Bar dataKey="household" fill="#868d4f" />
          </BarChart>
        </div>
      {/* </ResponsiveContainer> */}
    </div>
  );
};
