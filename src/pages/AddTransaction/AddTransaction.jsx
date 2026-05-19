import styles from "./AddTransaction.module.css";

import { ImSpoonKnife } from "react-icons/im";

import {
    MdHealthAndSafety
} from "react-icons/md";

import {
    FaShoppingBag,
    FaCarAlt,
    FaHome,
} from "react-icons/fa";

import { IoGameController } from "react-icons/io5";

import { RiBillLine } from "react-icons/ri";

import { BsThreeDots } from "react-icons/bs";

const AddTransaction = () => {
    return (
        <div className={styles.container}>
            {/* Header */}

            <div className={styles.header}>
                <div className={styles.leftHeader}>
                    <span className={styles.closeIcon}>
                        ✕
                    </span>

                    <h1 className={styles.heading}>
                        Add Transaction
                    </h1>
                </div>

                <img
                    className={styles.profile}
                    src="https://i.pravatar.cc/100"
                    alt="profile"
                />
            </div>

            {/* Toggle */}

            <div className={styles.toggleWrapper}>
                <button className={styles.activeBtn}>
                    Expense
                </button>

                <button>Income</button>
            </div>

            {/* Amount */}

            <div className={styles.amountSection}>
                <p>AMOUNT</p>

                <h2>$ 0.00</h2>
            </div>

            {/* Category */}

            <div className={styles.categorySection}>
                <p className={styles.label}>
                    CATEGORY
                </p>

                <div className={styles.categoryGrid}>
                    <div className={styles.category}>
                        <ImSpoonKnife size={22} />

                        <span>Food</span>
                    </div>

                    <div className={styles.activeCategory}>
                        <FaShoppingBag size={22} />

                        <span>Shopping</span>
                    </div>

                    <div className={styles.category}>
                        <FaCarAlt size={22} />

                        <span>Travel</span>
                    </div>

                    <div className={styles.category}>
                        <FaHome size={22} />

                        <span>Rent</span>
                    </div>

                    <div className={styles.category}>
                        <MdHealthAndSafety size={22} />

                        <span>Health</span>
                    </div>

                    <div className={styles.category}>
                        <IoGameController size={22} />

                        <span>Leisure</span>
                    </div>

                    <div className={styles.category}>
                        <RiBillLine size={22} />

                        <span>Bills</span>
                    </div>

                    <div className={styles.category}>
                        <BsThreeDots size={22} />

                        <span>Other</span>
                    </div>
                </div>
            </div>

            {/* Date */}

            <div className={styles.inputGroup}>
                <label>DATE</label>

                <input
                    type="text"
                    value="Today, Oct 24, 2023"
                    readOnly
                />
            </div>

            {/* Note */}

            <div className={styles.inputGroup}>
                <label>NOTE</label>

                <textarea
                    placeholder="Add a description..."
                ></textarea>
            </div>

            {/* Image */}

            <div className={styles.imageBox}>
                <img
                    src="data:image/jpeg;base64,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"
                    alt="Expense image" />
            </div>

            {/* Button */}

            <button className={styles.saveBtn}>
                Save Transaction
            </button>
        </div>
    );
};

export default AddTransaction;