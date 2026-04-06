import React from "react";
import { TrendingUp, PieChart, DollarSign } from "lucide-react";

const Insights = ({ transactions = [] }) => {
  const income = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const spendingPercent =
    income > 0 ? ((expenses / income) * 100).toFixed(0) : 0;

  const categoryMap = {};
  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const topCategory =
    Object.keys(categoryMap).length > 0
      ? Object.keys(categoryMap).reduce((a, b) =>
          categoryMap[a] > categoryMap[b] ? a : b
        )
      : "N/A";

  const savings = income - expenses;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Insights</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center space-x-3">
          <PieChart className="h-8 w-8 text-blue-500" />
          <div>
            <p className="text-sm text-gray-600">Top Spending</p>
            <p className="font-semibold text-gray-900">{topCategory}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <TrendingUp className="h-8 w-8 text-red-500" />
          <div>
            <p className="text-sm text-gray-600">Spending Ratio</p>
            <p className="font-semibold text-gray-900">{spendingPercent}%</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <DollarSign className={`h-8 w-8 ${savings >= 0 ? 'text-green-500' : 'text-red-500'}`} />
          <div>
            <p className="text-sm text-gray-600">Net Savings</p>
            <p className={`font-semibold ${savings >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              ₹{Math.abs(savings).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;