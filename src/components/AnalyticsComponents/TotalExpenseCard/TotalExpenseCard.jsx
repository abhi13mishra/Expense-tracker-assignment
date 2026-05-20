import styles from "./TotalExpenseCard.module.css";

const TotalExpenseCard = ({ totalExpense }) => {

    return (

        <div className={styles.totalCard}>
            <div
                className={
                    styles.leftBorder
                }
            ></div>

            <div>

                <p>
                    TOTAL EXPENDITURE
                </p>

                <h2>
                    ₹ {totalExpense}
                </h2>

            </div>

            <span>
                ↘ Expense Overview
            </span>

        </div>
    );
};

export default TotalExpenseCard;