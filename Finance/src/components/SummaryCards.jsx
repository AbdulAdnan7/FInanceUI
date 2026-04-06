import React from "react";
import { ArrowUpRight, ArrowDownRight, Wallet } from "lucide-react";

const SummaryCards = () => {
  const cards = [
    {
      id: 1,
      title: "Total Balance",
      value: 1000,
      icon: <Wallet className="text-blue-500" />,
    },
    {
      id: 2,
      title: "Income",
      value: 400,
      icon: <ArrowUpRight className="text-green-500" />,
    },
    {
      id: 3,
      title: "Expenses",
      value: 500,
      icon: <ArrowDownRight className="text-red-500" />,
    },
  ];

  return (
    <div className="relative p-6">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-2xl shadow-md p-5 flex items-center justify-between hover:shadow-lg transition"
          >
            {/* Left */}
            <div>
              <p className="text-sm text-gray-500">
                {card.title}
              </p>

              <h2
                className={`text-2xl font-semibold mt-1 ${
                  card.title === "Income"
                    ? "text-green-500"
                    : card.title === "Expenses"
                    ? "text-red-500"
                    : "text-gray-900"
                }`}
              >
                ₹ {card.value.toLocaleString()}
              </h2>
            </div>

            {/* Right Icon */}
            <div className="text-3xl">
              {card.icon}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default SummaryCards;