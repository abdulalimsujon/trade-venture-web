import styles from "./Section.module.css";
const SectionTitle = ({ title }) => {
  return (
    <div className="container">
      <div className={styles.heading}>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default SectionTitle;
