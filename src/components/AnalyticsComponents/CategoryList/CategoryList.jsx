import styles
    from "./CategoryList.module.css";

import { useNavigate }
    from "react-router-dom";

const CategoryList = ({
    chartData,
    COLORS,
}) => {

    const navigate =
        useNavigate();

    return (

        <div
            className={
                styles.categoryList
            }
        >

            {
                chartData.map(
                    (
                        item,
                        index
                    ) => (

                        <div
                            key={item.name}

                            className={
                                styles.categoryItem
                            }
                        >

                            <div>

                                <span
                                    style={{
                                        backgroundColor:
                                            COLORS[
                                            index %
                                            COLORS.length
                                            ],
                                    }}

                                    className={
                                        styles.dot
                                    }
                                ></span>

                                {item.name}

                            </div>

                            <p>
                                ₹ {item.value}
                            </p>

                        </div>
                    )
                )
            }

            <button
                className={
                    styles.reportBtn
                }

                onClick={() =>
                    navigate(
                        "/transactions"
                    )
                }
            >

                VIEW DETAILED REPORT

            </button>

        </div>
    );
};

export default CategoryList;