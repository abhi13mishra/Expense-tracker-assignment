# Expense Tracker

A modern and responsive Expense Tracker application built using React, Context API, and CSS Modules.

The application helps users manage their income and expenses with a clean UI, real-time balance calculations, categorized transactions, and persistent local storage support.

---

# Features

## Dashboard
- Dynamic total balance calculation
- Real-time income and expense summary
- Recent transactions section
- Responsive layout for desktop, tablet, and mobile

## Add Transaction
- Add expense and income transactions
- Dynamic category switching
- Category selection with icons
- Real-time state updates
- LocalStorage persistence

## State Management
- Global state using Context API
- Shared transaction data across pages

## UI / UX
- Responsive design
- Reusable component architecture
- CSS Modules for scoped styling
- Smooth and clean finance app inspired interface

---

# Tech Stack

- React
- Vite
- Context API
- CSS Modules
- React Icons
- LocalStorage

---

# Folder Structure

src/
│
├── components/
│   ├── Header/
│   ├── BalanceCard/
|   ├── categories/
│   ├── TransactionCard/
│   ├── TransactionToggle/
│   ├── AmountInput/
│   └── CategoryGrid/
│
├── pages/
│   ├── Dashboard/
│   ├── Transactions/
│   ├── AddTransaction/
│   └── Analytics/
│
├── context/
│   └── TransactionContext.jsx
│
├── data/
│   ├── data.js
│
│-main.css
├── App.jsx
└── main.jsx
