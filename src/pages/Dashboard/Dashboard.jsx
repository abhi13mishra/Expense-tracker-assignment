import { useContext } from "react";
import styles from "./Dashboard.module.css";
import Header from "../../components/CommonComponents/Header/Header";
import BalanceCard from "../../components/DashboardComponents/BalanceCard/BalanceCard";
import TransactionCard from "../../components/TransactionCard/TransactionCard";
import { TransactionContext } from "../../context/TransactionContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    const { transactions } = useContext(TransactionContext);

    // Income

    const income = transactions
        .filter((item) => item.type === "income")
        .reduce(
            (total, item) =>
                total + item.amount,
            0
        );

    // Expense

    const expense = transactions
        .filter((item) => item.type === "expense")
        .reduce(
            (total, item) =>
                total + item.amount,
            0
        );

    // Balance

    const balance = income - expense;

    return (
        <div className={styles.container}>

            {/* Header */}

            <Header title="Financial Serenity" />

            {/* Balance */}

            <BalanceCard
                title="Total Balance"
                amount={balance}
            />

            {/* Income Expense */}

            <div className={styles.cardWrapper}>

                <div className={styles.incomeCard}>
                    <p>Income</p>

                    <h3>${income}</h3>
                </div>

                <div className={styles.expenseCard}>
                    <p>Expenses</p>

                    <h3>${expense}</h3>
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

                <p className={styles.viewAll}
                    onClick={() =>
                        navigate("/transactions")
                    }
                >
                    VIEW ALL
                </p>

            </div>

            {/* Transactions */}

            <div className={styles.transactionList}>

                {
                    transactions.length > 0 ? (

                        transactions.map((item) => (

                            <TransactionCard
                                key={item.id}

                                id={item.id}

                                title={item.title}

                                category={item.category}

                                amount={item.amount}

                                type={item.type}

                                date={item.date}
                            />
                        ))

                    ) : (

                        <div
                            className={
                                styles.emptyState
                            }
                        >

                            No Transactions Yet

                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Dashboard;