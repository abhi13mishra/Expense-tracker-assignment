import { Link, useLocation } from "react-router-dom";

import {
    AiFillHome,
    AiOutlineBarChart,
} from "react-icons/ai";

import { HiArrowsRightLeft } from "react-icons/hi2";

import { IoAddCircle } from "react-icons/io5";

import styles from "./Navbar.module.css";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className={styles.navbar}>
            {/* Home */}

            <Link
                to="/"
                className={
                    location.pathname === "/"
                        ? styles.active
                        : styles.link
                }
            >
                <AiFillHome size={24} />

                <span>Home</span>
            </Link>

            {/* Transactions */}

            <Link
                to="/transactions"
                className={
                    location.pathname === "/transactions"
                        ? styles.active
                        : styles.link
                }
            >
                <HiArrowsRightLeft size={24} />

                <span>Transactions</span>
            </Link>

            {/* Add */}

            <Link
                to="/add"
                className={
                    location.pathname === "/add"
                        ? styles.active
                        : styles.link
                }
            >
                <IoAddCircle size={40} />

                <span>Add</span>
            </Link>

            {/* Analytics */}

            <Link
                to="/analytics"
                className={
                    location.pathname === "/analytics"
                        ? styles.active
                        : styles.link
                }
            >
                <AiOutlineBarChart size={24} />

                <span>Analytics</span>
            </Link>

            {/* Profile */}

            <Link
                to="/profile"
                className={
                    location.pathname === "/profile"
                        ? styles.active
                        : styles.link
                }
            >
                <FaRegUser size={24} />

                <span>Profile</span>
            </Link>
        </nav>
    );
};

export default Navbar;