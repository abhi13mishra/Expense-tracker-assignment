import { createContext, useEffect, useState } from "react";

export const TransactionContext = createContext();

const TransactionProvider = ({ children }) => {

    const [transactions, setTransactions] = useState(() => {
        const savedTransactions = localStorage.getItem(
            "transactions"
        );

        return savedTransactions
            ? JSON.parse(savedTransactions)
            : [];
    });

    useEffect(() => {
        localStorage.setItem(
            "transactions",

            JSON.stringify(
                transactions
            )
        );

    }, [transactions]);

    // ADD TRANSACTION

    const addTransaction = (newTransaction) => {
        setTransactions((prev) => [
            newTransaction,
            ...prev,
        ]);
    };

    // DELETE TRANSACTION

    const deleteTransaction = (id) => {
        const filtered =
            transactions.filter(
                (item) =>
                    item.id !== id
            );

        setTransactions(filtered);
    };

    return (
        <TransactionContext.Provider
            value={{
                transactions,
                addTransaction,
                deleteTransaction,
            }}
        >
            {children}
        </TransactionContext.Provider>
    );
};

export default TransactionProvider;