import React from "react";
import Navbar from "./components/Navbar";
import SummaryCards from "./components/SummaryCards";
import Charts from "./components/Charts";
import TransactionsTable from "./components/TransactionsTable";
import transactions from "./mockData";

const App = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <SummaryCards />
      <Charts transactions={transactions} />
      <TransactionsTable transactions={transactions} />
    </div>
  );
};

export default App;
