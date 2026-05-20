import { useContext, useState } from "react";

import styles from "./Transactions.module.css";

import TransactionCard from "../../components/TransactionCard/TransactionCard";

import Header from "../../components/CommonComponents/Header/Header";

import { TransactionContext } from "../../context/TransactionContext";

const Transactions = () => {
    const { transactions, deleteTransaction } = useContext(TransactionContext);

    const [search, setSearch] = useState("");

    const [activeFilter, setActiveFilter] = useState("All");

    // FILTERED TRANSACTIONS

    const filteredTransactions = transactions.filter((item) => {
        const matchesSearch =
            item.title
                .toLowerCase()
                .includes(
                    search.toLowerCase()
                );

        const matchesCategory = activeFilter === "All"
            ? true
            : item.category === activeFilter;

        return (
            matchesSearch && matchesCategory
        );
    });

    // FILTER BUTTONS

    const filters = [
        "All",
        "Food",
        "Travel",
        "Bills",
        "Shopping",
        "Health",
    ];

    return (
        <div className={styles.container}>

            {/* Header */}

            <Header title="Transactions" />

            {/* Search */}

            <div className={styles.searchBar}>

                <input
                    type="text"
                    placeholder="Search transactions"
                    value={search}
                    onChange={(e) =>
                        setSearch(
                            e.target.value
                        )
                    }
                />
            </div>

            {/* Filters */}

            <div className={styles.filters}>
                {filters.map((item) => (
                    <button
                        key={item}
                        className={
                            activeFilter === item
                                ? styles.active
                                : ""
                        }

                        onClick={() => setActiveFilter(
                            item
                        )
                        }
                    >
                        {item}

                    </button>
                ))}
            </div>

            {/* Transactions */}

            <div className={styles.section}>
                <h2>
                    Recent Transactions
                </h2>

                <div className={styles.list}>
                    {
                        filteredTransactions.length > 0 ? (
                            filteredTransactions.map(
                                (item) => (

                                    <TransactionCard
                                        key={item.id}
                                        id={item.id}
                                        title={
                                            item.title
                                        }

                                        category={
                                            item.category
                                        }

                                        amount={
                                            item.amount
                                        }

                                        type={
                                            item.type
                                        }

                                        deleteTransaction={
                                            deleteTransaction
                                        }
                                    />
                                )
                            )

                        ) : (

                            <p
                                className={
                                    styles.empty
                                }
                            >
                                No Transactions Found
                            </p>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Transactions;