import { useContext, useState } from "react";
import styles from "./AddTransaction.module.css";
import Header from "../../components/Header/Header";
import TransactionToggle from "../../components/TransactionToggle/TransactionToggle";
import AmountInput from "../../components/AmountInput/AmountInput";
import CategoryGrid from "../../components/CategoryGrid/CategoryGrid";
import { TransactionContext } from "../../context/TransactionContext";

const AddTransaction = () => {

    const { addTransaction } = useContext(TransactionContext);

    const [type, setType] = useState("expense");

    const [amount, setAmount] = useState("");

    const [note, setNote] = useState("");

    const [date, setDate] = useState("");

    const [selectedCategory, setSelectedCategory] = useState("Food");

    // SAVE TRANSACTION

    const saveTransaction = () => {
        if (
            !amount ||
            !note ||
            !date
        ) return;

        const newTransaction = {
            id: Date.now(),
            title: note,
            category: selectedCategory,
            amount: Number(amount),
            type,
            date,
        };

        addTransaction(newTransaction);

        // RESET

        setAmount("");
        setNote("");
        setDate("");
        setSelectedCategory("Food");
        setType("expense");
    };

    return (
        <div className={styles.container}>

            {/* Header */}

            <Header title="Add Transaction" />

            {/* Toggle */}

            <TransactionToggle
                type={type}
                setType={setType}
                setSelectedCategory={
                    setSelectedCategory
                }
            />

            {/* Amount */}

            <AmountInput
                amount={amount}
                setAmount={setAmount}
            />

            {/* Categories */}

            <CategoryGrid
                selectedCategory={
                    selectedCategory
                }

                setSelectedCategory={
                    setSelectedCategory
                }

                type={type}
            />

            {/* Date */}

            <div className={styles.inputGroup}>
                <label>DATE</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) =>
                        setDate(
                            e.target.value
                        )
                    }
                    className={styles.dateInput}
                />

            </div>

            {/* Note */}

            <div className={styles.inputGroup}>
                <label>NOTE</label>
                <textarea
                    placeholder="Add a description..."
                    value={note}
                    onChange={(e) =>
                        setNote(
                            e.target.value
                        )
                    }
                ></textarea>

            </div>

            {/* Image */}

            <div className={styles.imageBox}>
                <img
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop"
                    alt="Expense"
                />
            </div>

            {/* Button */}

            <button
                className={styles.saveBtn}
                onClick={saveTransaction}
            >
                Save Transaction
            </button>
        </div>
    );
};

export default AddTransaction;