import styles from "./CategoryGrid.module.css";

import { expenseCategories } from "../Categories/expenseCategories";

import { incomeCategories } from "../Categories/incomeCategories";

const CategoryGrid = ({
    selectedCategory,
    setSelectedCategory,
    type,
}) => {

    const categories =
        type === "expense"
            ? expenseCategories
            : incomeCategories;

    return (
        <div className={styles.categorySection}>

            <p className={styles.label}>
                CATEGORY
            </p>

            <div className={styles.categoryGrid}>

                {categories.map((item) => (

                    <div
                        key={item.name}

                        className={
                            selectedCategory ===
                                item.name
                                ? styles.activeCategory
                                : styles.category
                        }

                        onClick={() =>
                            setSelectedCategory(
                                item.name
                            )
                        }
                    >

                        {item.icon}

                        <span>
                            {item.name}
                        </span>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default CategoryGrid;