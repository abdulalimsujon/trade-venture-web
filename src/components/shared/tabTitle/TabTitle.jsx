import styles from "./Tabtitle.module.css";
const TabTitle = ({ children }) => {
  return <h2 className={styles.tabTitle}>{children}</h2>;
};

export default TabTitle;
