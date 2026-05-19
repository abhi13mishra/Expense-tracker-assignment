import styles from "./Transactions.module.css";

import TransactionCard from "../../components/TransactionCard/TransactionCard";
import Header from "../../components/Header/Header";

const Transactions = () => {
    return (
        <div className={styles.container}>
            {/* Header */}

            <Header title="Financial Serenity" />

            {/* Search */}

            <div className={styles.searchBar}>
                <input
                    type="text"
                    placeholder="Search transactions"
                />
            </div>

            {/* Filters */}

            <div className={styles.filters}>
                <button className={styles.active}>
                    All
                </button>

                <button>Food</button>

                <button>Transport</button>

                <button>Bills</button>

                <button>Shopping</button>

                <button>Health</button>
            </div>

            {/* Today */}

            <div className={styles.section}>
                <h2>Today</h2>

                <div className={styles.list}>
                    <TransactionCard
                        title="Whole Foods Market"
                        category="Groceries"
                        amount="84.20"
                        type="expense"
                    />

                    <TransactionCard
                        title="Monthly Salary"
                        category="Income"
                        amount="4,250"
                        type="income"
                    />

                    <TransactionCard
                        title="Uber Central"
                        category="Transport"
                        amount="12.50"
                        type="expense"
                    />
                </div>
            </div>

            {/* Yesterday */}

            <div className={styles.section}>
                <h2>Yesterday</h2>

                <div className={styles.list}>
                    <TransactionCard
                        title="Blue Bottle Coffee"
                        category="Food & Drink"
                        amount="6.75"
                        type="expense"
                    />

                    <TransactionCard
                        title="Verizon Wireless"
                        category="Bills"
                        amount="95"
                        type="expense"
                    />

                    <TransactionCard
                        title="Equinox Membership"
                        category="Health"
                        amount="180"
                        type="expense"
                    />
                </div>
            </div>

            {/* Date */}

            <div className={styles.section}>
                <h2>October 24</h2>

                <div className={styles.list}>
                    <TransactionCard
                        title="Amazon Prime"
                        category="Shopping"
                        amount="14.99"
                        type="expense"
                    />
                </div>
            </div>
        </div>
    );
};

export default Transactions;