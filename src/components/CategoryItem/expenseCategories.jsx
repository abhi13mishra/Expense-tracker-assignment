import { ImSpoonKnife } from "react-icons/im";

import { MdHealthAndSafety } from "react-icons/md";

import { FaShoppingBag, FaCarAlt, FaHome, } from "react-icons/fa";

import { IoGameController } from "react-icons/io5";

import { RiBillLine } from "react-icons/ri";

import { BsThreeDots } from "react-icons/bs";

export const expenseCategories = [
    {
        name: "Food",
        icon: <ImSpoonKnife size={22} />,
    },
    {
        name: "Shopping",
        icon: <FaShoppingBag size={22} />,
    },
    {
        name: "Travel",
        icon: <FaCarAlt size={22} />,
    },
    {
        name: "Rent",
        icon: <FaHome size={22} />,
    },
    {
        name: "Health",
        icon:
            <MdHealthAndSafety size={22} />,
    },
    {
        name: "Leisure",
        icon:
            <IoGameController size={22} />,
    },
    {
        name: "Bills",
        icon: <RiBillLine size={22} />,
    },
    {
        name: "Other",
        icon: <BsThreeDots size={22} />,
    },
];