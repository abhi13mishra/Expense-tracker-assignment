import { useContext, useState } from "react";

import styles from "./Transactions.module.css";

import TransactionCard from "../../components/TransactionCard/TransactionCard";

import Header from "../../components/CommonComponents/Header/Header";

import { TransactionContext } from "../../context/TransactionContext";

import { FiSearch } from "react-icons/fi";

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

                <FiSearch
                    className={styles.searchIcon}
                />

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

            {/* Transactions */}

            {
                filteredTransactions.length > 0 ? (

                    Object.entries(

                        filteredTransactions.reduce(
                            (groups, item) => {

                                const today =
                                    new Date();

                                const yesterday =
                                    new Date();

                                yesterday.setDate(
                                    today.getDate() - 1
                                );

                                const itemDate =
                                    new Date(item.date);

                                let groupLabel = "";

                                if (
                                    itemDate
                                        .toDateString()
                                    ===
                                    today.toDateString()
                                ) {

                                    groupLabel =
                                        "Today";

                                } else if (

                                    itemDate
                                        .toDateString()

                                    ===

                                    yesterday
                                        .toDateString()

                                ) {

                                    groupLabel =
                                        "Yesterday";

                                } else {

                                    groupLabel =
                                        itemDate
                                            .toLocaleDateString(
                                                "default",
                                                {
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric",
                                                }
                                            );
                                }

                                if (
                                    !groups[groupLabel]
                                ) {

                                    groups[groupLabel]
                                        = [];
                                }

                                groups[groupLabel]
                                    .push(item);

                                return groups;

                            }, {})
                    ).map(([date, items]) => (

                        <div
                            key={date}

                            className={
                                styles.section
                            }
                        >

                            <h2>{date}</h2>

                            <div
                                className={
                                    styles.list
                                }
                            >

                                {
                                    items.map((item) => (

                                        <TransactionCard
                                            key={item.id}

                                            id={item.id}

                                            date={item.date}

                                            title={item.title}

                                            category={item.category}

                                            amount={item.amount}

                                            type={item.type}

                                            deleteTransaction={
                                                deleteTransaction
                                            }
                                        />
                                    ))
                                }

                            </div>

                        </div>
                    ))

                ) : (

                    <div className={styles.emptyState}>
                        No Transactions Found
                    </div>
                )
            }
        </div>
    );
};

export default Transactions;