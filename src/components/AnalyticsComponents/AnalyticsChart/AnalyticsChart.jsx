import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer
} from "recharts";

import styles from "./AnalyticsChart.module.css";

const AnalyticsChart = ({ chartData, COLORS }) => {

    return (
        <div className={styles.chartCard}>
            <p>
                SPENDING BREAKDOWN
            </p>

            <div
                className={
                    styles.chartWrapper
                }
            >

                <ResponsiveContainer
                    width="100%"
                    height={260}
                >

                    <PieChart>

                        <Pie
                            data={chartData}

                            dataKey="value"

                            innerRadius={70}

                            outerRadius={100}

                            paddingAngle={4}
                        >

                            {
                                chartData.map(
                                    (
                                        entry,
                                        index
                                    ) => (

                                        <Cell
                                            key={
                                                index
                                            }

                                            fill={
                                                COLORS[
                                                index %
                                                COLORS.length
                                                ]
                                            }
                                        />
                                    )
                                )
                            }

                        </Pie>

                    </PieChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
};

export default AnalyticsChart;