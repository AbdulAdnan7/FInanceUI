import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const getLineData = (transactions) => {
  const monthly = {};

  transactions.forEach((t) => {
    const month = new Date(t.date).toLocaleString("default", {
      month: "short",
    });

    if (!monthly[month]) {
      monthly[month] = 0;
    }

    monthly[month] += t.type === "income" ? t.amount : -t.amount;
  });

  return Object.keys(monthly).map((month) => ({
    name: month,
    balance: monthly[month],
  }));
};

const getPieData = (transactions) => {
  const categories = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      if (!categories[t.category]) {
        categories[t.category] = 0;
      }
      categories[t.category] += t.amount;
    }
  });

  return Object.keys(categories).map((cat) => ({
    name: cat,
    value: categories[cat],
  }));
};

const Charts = ({ transactions }) => {
 

  const lineData = getLineData(transactions);
  const pieData = getPieData(transactions);

  const COLORS = ["#22c55e", "#3b82f6", "#ef4444", "#f59e0b"];

  return (
    <div className="relatvie p-6 grid grid-cols-1 md:grid-cols-2 gap-6 ">
      <div className="bg-white p-4 rounded-xl shadow">
        <h1>Balance Trend</h1>

        <ResponsiveContainer width={"100%"} height={250}>
          <LineChart data={lineData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line dataKey={"balance"} stroke="#3b83f6" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 rounded-xl shadow">
        <h2>Spending Breakdown</h2>

        <ResponsiveContainer width={"100%"} height={250}>
          <PieChart>
            <Pie data={pieData} dataKey="value" outerRadius={80} label>
              {pieData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
