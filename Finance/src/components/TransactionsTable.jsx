import React from "react";

const TransactionsTable = () => {
  return (
    <section className="relatvie p-6">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl">Transactions</h1>
        </div>

        <div className="flex gap-6">
          <div>
            <input
              type="text"
              placeholder="Search for Expenses..."
              className="border px-3 py-1 rounded"
            />
          </div>

          <div>
            <select className="border px-3 py-1" name="value" id="value">
              <option value="All" defaultValue>
                All
              </option>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransactionsTable;
