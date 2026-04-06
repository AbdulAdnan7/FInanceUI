import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import SummaryCards from "./components/SummaryCards";
import Charts from "./components/Charts";
import TransactionsTable from "./components/TransactionsTable";
import Insights from "./components/Insights";
import {
  addTransaction,
  updateTransaction,
  deleteTransaction,
} from "./redux/slices/transactionsSlice";

const App = () => {
  const dispatch = useDispatch();
  const transactionData = useSelector((state) => state.transactions.items);
  const role = useSelector((state) => state.role.currentRole);

  const handleAddTransaction = (newTransaction) => {
    dispatch(addTransaction(newTransaction));
  };

  const handleUpdateTransaction = (id, updatedTransaction) => {
    dispatch(updateTransaction({ id, ...updatedTransaction }));
  };

  const handleDeleteTransaction = (id) => {
    dispatch(deleteTransaction(id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <SummaryCards transactions={transactionData} />
        <Charts transactions={transactionData} />
        <TransactionsTable
          transactions={transactionData}
          isAdmin={role === "admin"}
          onAddTransaction={handleAddTransaction}
          onUpdateTransaction={handleUpdateTransaction}
          onDeleteTransaction={handleDeleteTransaction}
        />
        <Insights transactions={transactionData} />
      </div>
    </div>
  );
};

export default App;
