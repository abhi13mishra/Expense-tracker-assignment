import styles from "./TransactionCard.module.css";

const TransactionCard = ({
    title,
    category,
    amount,
    type,
}) => {
    return (
        <div className={styles.card}>
            <div>
                <h3>{title}</h3>

                <p>{category}</p>
            </div>

            <span
                className={
                    type === "income"
                        ? styles.income
                        : styles.expense
                }
            >
                {type === "income" ? "+" : "-"}

                ₹ {amount}
            </span>
        </div>
    );
};

export default TransactionCard;