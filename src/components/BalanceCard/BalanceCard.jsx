import styles from "./BalanceCard.module.css";

const BalanceCard = ({ title, amount }) => {
    return (
        <div className={styles.card}>
            <p className={styles.title}>
                {title}
            </p>

            <h2 className={styles.amount}>
                $ {amount}
            </h2>

            <span className={styles.text}>
                + 2.5% from last month
            </span>
        </div>
    );
};

export default BalanceCard;