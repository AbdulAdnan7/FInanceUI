# Finance Dashboard UI

## Overview
This is a **frontend-only Finance Dashboard** built to simulate a user’s financial activity.  
Users can:
- View overall financial summary (Total Balance, Income, Expenses)
- Explore transactions
- Understand basic spending patterns via charts
- Simulate roles (Viewer vs Admin)

The project is built using **React** with **mock data**—no backend required.

---

## Features
### Dashboard Overview
- **Summary Cards:** Quick snapshot of balance, income, expenses
- **Charts:**
  - Balance Trend (Line Chart)
  - Spending Breakdown (Pie/Bar Chart)
- **Insights:** Highest spending category, monthly comparison

### Transactions
- Table with date, amount, category, type (income/expense)
- Search, filter, and sorting features
- Admin role can add/edit transactions (simulated)

### Role-Based UI
- Viewer: Read-only access
- Admin: Can edit/add transactions
- Role switcher in the header to toggle roles

### State Management
- `AppContext` (Context API) manages transactions, filters, and selected role
- All data is loaded from `mockTransactions.js`
- Optional: localStorage persistence for simulating data saving

---

## Installation
1. Clone the repo:
```bash
git clone <your-repo-link>
cd finance-dashboard