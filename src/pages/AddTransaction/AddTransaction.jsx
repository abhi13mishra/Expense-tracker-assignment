import { useContext, useState, useEffect } from "react";

import styles from "./AddTransaction.module.css";

import Header from "../../components/CommonComponents/Header/Header";

import TransactionToggle from "../../components/AddTransactionComponents/TransactionToggle/TransactionToggle";

import AmountInput from "../../components/AddTransactionComponents/AmountInput/AmountInput";

import CategoryGrid from "../../components/AddTransactionComponents/CategoryGrid/CategoryGrid";

import { TransactionContext } from "../../context/TransactionContext";

const AddTransaction = () => {

    const {
        addTransaction,
        updateTransaction,
        editTransaction,
        setEditTransaction,
    } = useContext(TransactionContext);

    const [type, setType] = useState("expense");

    const [amount, setAmount] = useState("");

    const [note, setNote] = useState("");

    const [error, setError] = useState("");

    const [date, setDate] = useState("");

    const [selectedCategory, setSelectedCategory] = useState("Food");

    useEffect(() => {

        if (editTransaction) {

            setAmount(
                editTransaction.amount
            );

            setNote(
                editTransaction.title
            );

            setSelectedCategory(
                editTransaction.category
            );

            setType(
                editTransaction.type
            );

            setDate(
                editTransaction.date
            );
        }

    }, [editTransaction]);

    // SAVE TRANSACTION

    const saveTransaction = () => {

        if (
            !amount ||
            !note ||
            !date
        ) {

            setError(
                "Please fill all fields"
            );

            return;
        }

        setError("");

        const newTransaction = {
            id: Date.now(),
            title: note,
            category: selectedCategory,
            amount: Number(amount),
            type,
            date,
        };

        if (editTransaction) {

            updateTransaction({
                ...newTransaction,
                id: editTransaction.id,
            });

        } else {

            addTransaction(newTransaction);
        }

        setAmount("");
        setNote("");
        setDate("");
        setSelectedCategory("Food");
        setType("expense");

        setEditTransaction(null);
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

                    className={
                        styles.dateInput
                    }
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

            {/* error */}

            {
                error && (

                    <p className={styles.error}>
                        {error}
                    </p>
                )
            }

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