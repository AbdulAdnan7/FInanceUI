import React from "react";
import { ArrowUpRight, ArrowDownRight, Wallet } from "lucide-react";

const SummaryCards = ({ transactions }) => {
  const totalBalance = transactions.reduce((sum, t) => sum + (t.type === 'income' ? t.amount : -t.amount), 0);
  const income = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
  const expenses = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);

  const cards = [
    {
      id: 1,
      title: "Total Balance",
      value: totalBalance,
      icon: <Wallet className="text-blue-500" />,
    },
    {
      id: 2,
      title: "Income",
      value: income,
      icon: <ArrowUpRight className="text-green-500" />,
    },
    {
      id: 3,
      title: "Expenses",
      value: expenses,
      icon: <ArrowDownRight className="text-red-500" />,
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white border border-gray-200 rounded-lg p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">
                  {card.title}
                </p>
                <p
                  className={`text-2xl font-semibold ${
                    card.title === "Income"
                      ? "text-green-600"
                      : card.title === "Expenses"
                      ? "text-red-600"
                      : totalBalance >= 0 ? "text-gray-900" : "text-red-600"
                  }`}
                >
                  ₹{Math.abs(card.value).toLocaleString()}
                </p>
              </div>
              <div className="text-gray-400">
                {card.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryCards;