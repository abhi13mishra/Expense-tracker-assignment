import Header from "../../components/Header/Header";
import styles from "./Analytics.module.css";

const Analytics = () => {
    return (
        <div className={styles.container}>
            {/* Header */}

            <Header title="Financial Serenity" />

            {/* Month */}

            <div className={styles.monthSection}>
                <button>{"<"}</button>

                <div>
                    <p>CURRENT PERIOD</p>

                    <h2>October 2023</h2>
                </div>

                <button>{">"}</button>
            </div>

            {/* Total Expenditure */}

            <div className={styles.totalCard}>
                <div className={styles.leftBorder}></div>

                <div>
                    <p>TOTAL EXPENDITURE</p>

                    <h2>$4,280.50</h2>
                </div>

                <span>
                    ↘ 12% less than September
                </span>
            </div>

            {/* Breakdown */}

            <div className={styles.breakdownSection}>
                {/* Left */}

                <div className={styles.chartCard}>
                    <p>SPENDING BREAKDOWN</p>

                    <div className={styles.circle}>
                        <h2>40%</h2>

                        <span>HOUSING</span>
                    </div>
                </div>

                {/* Right */}

                <div className={styles.categoryList}>
                    <div className={styles.categoryItem}>
                        <div>
                            <span className={styles.black}></span>

                            Housing
                        </div>

                        <p>$1,712.20</p>
                    </div>

                    <div className={styles.categoryItem}>
                        <div>
                            <span className={styles.green}></span>

                            Food & Dining
                        </div>

                        <p>$1,070.12</p>
                    </div>

                    <div className={styles.categoryItem}>
                        <div>
                            <span className={styles.gray}></span>

                            Transportation
                        </div>

                        <p>$642.08</p>
                    </div>

                    <div className={styles.categoryItem}>
                        <div>
                            <span className={styles.light}></span>

                            Lifestyle & Misc
                        </div>

                        <p>$856.10</p>
                    </div>

                    <button className={styles.reportBtn}>
                        VIEW DETAILED REPORT
                    </button>
                </div>
            </div>

            {/* Trend */}

            <div className={styles.trendSection}>
                <p>6-MONTH TREND</p>

                <div className={styles.trendBox}>
                    <div>MAY</div>

                    <div>JUN</div>

                    <div>JUL</div>

                    <div>AUG</div>

                    <div>SEP</div>

                    <div className={styles.activeMonth}>
                        OCT
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;