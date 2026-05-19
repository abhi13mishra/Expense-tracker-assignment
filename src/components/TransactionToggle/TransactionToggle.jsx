import styles from "./TransactionToggle.module.css";

const TransactionToggle = ({ type, setType, setSelectedCategory, }) => {

    return (
        <div className={styles.toggleWrapper}>

            <button
                className={
                    type === "expense"
                        ? styles.activeBtn
                        : ""
                }
                onClick={() => {
                    setType("expense");
                    setSelectedCategory(
                        "Food"
                    );
                }}
            >
                Expense
            </button>

            <button
                className={
                    type === "income"
                        ? styles.activeBtn
                        : ""
                }
                onClick={() => {
                    setType("income");
                    setSelectedCategory(
                        "Salary"
                    );
                }}
            >
                Income
            </button>

        </div>
    );
};

export default TransactionToggle;