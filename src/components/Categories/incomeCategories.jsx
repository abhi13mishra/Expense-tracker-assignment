import { FaMoneyBillWave, FaBriefcase, FaChartLine, } from "react-icons/fa";

import { BsCashStack } from "react-icons/bs";

export const incomeCategories = [
    {
        name: "Salary",
        icon:
            <FaMoneyBillWave size={22} />,
    },
    {
        name: "Freelance",
        icon:
            <FaBriefcase size={22} />,
    },
    {
        name: "Business",
        icon:
            <FaChartLine size={22} />,
    },
    {
        name: "Investment",
        icon:
            <BsCashStack size={22} />,
    },
];