import {
    createContext,
    useEffect,
    useState,
} from "react";

import { transactions as initialData }
    from "../data/data";

export const TransactionContext =
    createContext();

const TransactionProvider = ({
    children,
}) => {

    const [transactions, setTransactions] =
        useState(() => {

            const savedTransactions =
                localStorage.getItem(
                    "transactions"
                );

            return savedTransactions
                ? JSON.parse(savedTransactions)
                : initialData;
        });

    useEffect(() => {
        localStorage.setItem(
            "transactions",
            JSON.stringify(transactions)
        );
    }, [transactions]);

    // ADD

    const addTransaction = (newTransaction) => {

        setTransactions((prev) => [
            newTransaction,
            ...prev,
        ]);
    };

    // DELETE

    const deleteTransaction = (id) => {

        const filtered =
            transactions.filter(
                (item) => item.id !== id
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