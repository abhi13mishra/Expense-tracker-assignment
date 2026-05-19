import styles from "./Dashboard.module.css";

import BalanceCard from "../../components/BalanceCard/BalanceCard";

import TransactionCard from "../../components/TransactionCard/TransactionCard";

const Dashboard = () => {
    return (
        <div className={styles.container}>
            {/* Header */}

            <div className={styles.header}>
                <div className={styles.leftHeader}>
                    <span className={styles.menuIcon}>
                        ☰
                    </span>

                    <h1 className={styles.heading}>
                        Financial Serenity
                    </h1>
                </div>

                <img
                    className={styles.profile}
                    src="https://i.pravatar.cc/100"
                    alt="profile"
                />
            </div>

            {/* Balance */}

            <BalanceCard
                title="Total Balance"
                amount="42,950.00"
            />

            {/* Income Expense */}

            <div className={styles.cardWrapper}>
                <div className={styles.incomeCard}>
                    <p>Income</p>

                    <h3>$8,400</h3>
                </div>

                <div className={styles.expenseCard}>
                    <p>Expenses</p>

                    <h3>$3,250</h3>
                </div>
            </div>

            {/* Analytics Banner */}

            <div className={styles.analyticsBanner}>
                <h2>Spend Analytics</h2>

                <p>
                    You spent 12% less on dining this
                    week.
                </p>
            </div>

            {/* Recent Header */}

            <div className={styles.recentHeader}>
                <h2>Recent Activity</h2>

                <span>VIEW ALL</span>
            </div>

            {/* Transactions */}

            <div className={styles.transactionList}>
                <TransactionCard
                    title="Apple Store"
                    category="Technology"
                    amount="1,299"
                    type="expense"
                />

                <TransactionCard
                    title="Monthly Salary"
                    category="Income"
                    amount="6,500"
                    type="income"
                />

                <TransactionCard
                    title="The Monocle Café"
                    category="Dining"
                    amount="42"
                    type="expense"
                />

                <TransactionCard
                    title="Lufthansa Airlines"
                    category="Travel"
                    amount="840"
                    type="expense"
                />
            </div>
        </div>
    );
};

export default Dashboard;