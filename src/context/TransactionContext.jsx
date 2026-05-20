import { createContext, useEffect, useState } from "react";

import { transactions as initialData } from "../data/data";

export const TransactionContext = createContext();

const TransactionProvider = ({ children }) => {

    const [transactions, setTransactions] = useState(() => {

        const savedTransactions = localStorage.getItem("transactions");

        return savedTransactions
            ? JSON.parse(savedTransactions)
            : initialData;
    });

    const [editTransaction, setEditTransaction] = useState(null);

    useEffect(() => {

        localStorage.setItem(
            "transactions",

            JSON.stringify(transactions)
        );

    }, [transactions]);

    // ADD TRANSACTION

    const addTransaction = (newTransaction) => {

        setTransactions((prev) => [
            newTransaction,
            ...prev,
        ]);
    };

    // UPDATE TRANSACTION

    const updateTransaction = (updatedTransaction) => {

        const updated = transactions.map((item) =>
            item.id === updatedTransaction.id
                ? updatedTransaction
                : item
        );

        setTransactions(updated);
    };

    // DELETE TRANSACTION

    const deleteTransaction = (id) => {

        const filtered = transactions.filter((item) => item.id !== id);

        setTransactions(filtered);
    };

    return (

        <TransactionContext.Provider
            value={{
                transactions,
                addTransaction,
                updateTransaction,
                deleteTransaction,
                editTransaction,
                setEditTransaction,
            }}
        >
            {children}

        </TransactionContext.Provider>
    );
};

export default TransactionProvider;