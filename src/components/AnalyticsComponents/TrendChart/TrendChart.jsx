import {
    BarChart,
    Bar,
    XAxis,
    ResponsiveContainer,
} from "recharts";

import styles
    from "./TrendChart.module.css";

const TrendChart = ({
    trendData,
}) => {

    return (

        <div className={styles.trendSection}>

            <p>6-MONTH TREND</p>

            <div className={styles.chartBox}>

                <ResponsiveContainer
                    width="100%"
                    height={220}
                >

                    <BarChart
                        data={trendData}
                    >

                        <XAxis
                            dataKey="month"
                        />

                        <Bar
                            dataKey="amount"
                            radius={[
                                10,
                                10,
                                0,
                                0,
                            ]}
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
};

export default TrendChart;