import styles from "./TransactionCard.module.css";
import { MdDelete } from "react-icons/md";

const TransactionCard = ({
    title,
    category,
    amount,
    type,
    deleteTransaction,
    id,
}) => {

    return (
        <div className={styles.card}>

            <div>
                <h3>{title}</h3>
                <p>{category}</p>
            </div>

            <div className={styles.rightSection}>

                <span
                    className={
                        type === "income"
                            ? styles.income
                            : styles.expense
                    }
                >

                    {type === "income"
                        ? "+"
                        : "-"}

                    ₹ {amount}

                </span>

                {deleteTransaction && (

                    <button
                        className={styles.deleteBtn}

                        onClick={() =>
                            deleteTransaction(id)
                        }
                    >

                        <MdDelete size={18} />

                    </button>
                )}

            </div>

        </div>
    );
};

export default TransactionCard;