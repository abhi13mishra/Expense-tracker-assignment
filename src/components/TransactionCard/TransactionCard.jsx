import styles from "./TransactionCard.module.css";
import { MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { TransactionContext } from "../../context/TransactionContext";

const TransactionCard = ({
    title,
    category,
    amount,
    type,
    deleteTransaction,
    id,
    date,
}) => {

    const navigate = useNavigate();

    const { setEditTransaction } = useContext(
        TransactionContext
    );

    return (
        <div className={styles.card}>
            <div>
                <h3>{title}</h3>
                <p>{category}</p>
            </div>

            <div className={styles.rightSection}>
                <span className={
                    type === "income"
                        ? styles.income
                        : styles.expense
                }
                >

                    {
                        type === "income"
                            ? "+"
                            : "-"
                    }
                    ₹ {amount}
                </span>

                <div className={styles.actions}>
                    <button
                        className={styles.editBtn}
                        onClick={() => {
                            setEditTransaction({
                                id,
                                title,
                                category,
                                amount,
                                type,
                                date,
                            });
                            navigate("/add");
                        }}
                    >
                        <MdEdit size={18} />
                    </button>

                    {
                        deleteTransaction && (
                            <button
                                className={styles.deleteBtn}
                                onClick={() =>
                                    deleteTransaction(id)
                                }
                            >
                                <MdDelete size={18} />
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default TransactionCard;