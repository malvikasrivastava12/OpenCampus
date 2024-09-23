import styles from "../Modules/DAO.module.css";
import Logo from "../assets/Logo.png";
export const DAONavbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo_container}>
          <img src={Logo} alt="Logo" className={styles.logo_icon} />
        </div>
        <ul className={styles.nav_links}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#governance" className="active">
              Governance
            </a>
          </li>
          <li>
            <a href="#snapshot">Snapshot</a>
          </li>
          <li>
            <a href="#forum">Forum</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
