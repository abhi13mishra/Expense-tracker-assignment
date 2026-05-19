import styles from "./AmountInput.module.css";

const AmountInput = ({
    amount,
    setAmount,
}) => {

    return (
        <div className={styles.amountSection}>

            <p>AMOUNT</p>

            <div className={styles.amountWrapper}>

                <span>$</span>

                <input
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) =>
                        setAmount(e.target.value)
                    }
                    onWheel={(e) =>
                        e.target.blur()
                    }
                    className={styles.amountInput}
                />
            </div>

        </div>
    );
};

export default AmountInput;