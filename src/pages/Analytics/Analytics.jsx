import { useContext, useState } from "react";
import Header from "../../components/CommonComponents/Header/Header";
import TotalExpenseCard from "../../components/AnalyticsComponents/TotalExpenseCard/TotalExpenseCard";
import AnalyticsChart from "../../components/AnalyticsComponents/AnalyticsChart/AnalyticsChart";
import CategoryList from "../../components/AnalyticsComponents/CategoryList/CategoryList";
import TrendChart from "../../components/AnalyticsComponents/TrendChart/TrendChart";
import styles from "./Analytics.module.css";
import { TransactionContext } from "../../context/TransactionContext";

const Analytics = () => {

    const { transactions } = useContext(TransactionContext);

    // CURRENT DATE

    const today = new Date();

    const [currentDate, setCurrentDate] =
        useState(new Date());

    const currentMonth = currentDate.toLocaleString(
        "default",
        {
            month: "long",
            year: "numeric",
        }
    );

    const currentMonthIndex =
        currentDate.getMonth();

    const currentYear =
        currentDate.getFullYear();

    // PREVIOUS MONTH

    const handlePrevMonth = () => {

        setCurrentDate(
            new Date(
                currentYear,
                currentMonthIndex - 1
            )
        );
    };

    // NEXT MONTH

    const handleNextMonth = () => {

        if (
            currentMonthIndex ===
            today.getMonth()

            &&

            currentYear ===
            today.getFullYear()
        ) {
            return;
        }

        setCurrentDate(
            new Date(
                currentYear,
                currentMonthIndex + 1
            )
        );
    };

    // CURRENT MONTH EXPENSES

    const expenseTransactions = transactions.filter(
        (item) => {

            const transactionDate =
                new Date(item.date);

            return (
                item.type === "expense" &&
                transactionDate.getMonth() === currentMonthIndex &&
                transactionDate.getFullYear() === currentYear
            );
        }
    );

    // TOTAL EXPENSE

    const totalExpense = expenseTransactions.reduce(
        (total, item) =>
            total + item.amount,
        0
    );

    // CATEGORY TOTALS

    const categoryTotals = {};

    expenseTransactions.forEach(
        (item) => {

            if (categoryTotals[item.category]) {

                categoryTotals[item.category] += item.amount;

            } else {

                categoryTotals[item.category] = item.amount;
            }
        }
    );

    // CHART DATA

    const chartData =
        Object.entries(
            categoryTotals
        ).map(([name, value]) => ({
            name,
            value,
        }));

    // TREND DATA

    const trendData = [];

    for (let i = 5; i >= 0; i--) {

        const date = new Date(
            currentYear,
            currentMonthIndex - i
        );

        const month =
            date.toLocaleString(
                "default",
                {
                    month: "short",
                }
            );

        const year =
            date.getFullYear();

        const monthIndex =
            date.getMonth();

        const monthlyExpense =
            transactions
                .filter((item) => {

                    const transactionDate =
                        new Date(item.date);

                    return (
                        item.type ===
                        "expense"

                        &&

                        transactionDate.getMonth()
                        === monthIndex

                        &&

                        transactionDate.getFullYear()
                        === year
                    );
                })

                .reduce(
                    (total, item) =>
                        total + item.amount,
                    0
                );

        trendData.push({
            month:
                month.toUpperCase(),
            amount:
                monthlyExpense,
        });
    }

    // COLORS

    const COLORS = [
        "#111111",
        "#6b7280",
        "#9ca3af",
        "#d1d5db",
        "#4b5563",
    ];

    return (

        <div className={styles.container}>

            {/* Header */}

            <Header title="Financial Serenity" />

            {/* Month */}

            <div className={styles.monthSection}>

                <button
                    onClick={handlePrevMonth}
                >
                    {"<"}
                </button>

                <div>

                    <p>CURRENT PERIOD</p>

                    <h2>{currentMonth}</h2>

                </div>

                <button
                    onClick={handleNextMonth}

                    disabled={
                        currentMonthIndex ===
                        today.getMonth()

                        &&

                        currentYear ===
                        today.getFullYear()
                    }
                >
                    {">"}
                </button>

            </div>

            {/* Total Expenditure */}

            <TotalExpenseCard totalExpense={totalExpense} />

            {/* Breakdown */}

            {
                chartData.length > 0 ? (

                    <div
                        className={
                            styles.breakdownSection
                        }
                    >

                        {/* Chart */}

                        <AnalyticsChart
                            chartData={chartData}
                            COLORS={COLORS}
                        />

                        {/* Category List */}

                        <CategoryList
                            chartData={chartData}
                            COLORS={COLORS}
                        />

                    </div>

                ) : (

                    <div
                        className={
                            styles.emptyState
                        }
                    >

                        No Transactions Found

                    </div>
                )
            }

            {/* Trend */}

            <TrendChart
                trendData={trendData}
            />

        </div>
    );
};

export default Analytics;