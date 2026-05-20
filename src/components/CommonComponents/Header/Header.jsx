import styles from "./Header.module.css";

const Header = ({ title }) => {
    return (
        <div className={styles.header}>
            <div className={styles.leftHeader}>
                <span className={styles.menuIcon}>
                    ☰
                </span>

                <h1 className={styles.heading}>
                    {title}
                </h1>
            </div>

            <img
                className={styles.profile}
                src="https://i.pravatar.cc/100"
                alt="profile"
            />
        </div>
    );
};

export default Header;