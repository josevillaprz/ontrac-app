import emptySvg from "../../assets/empty-cards.svg";
import styles from "./EmptyState.module.css";

const EmptyState = ({ title, body }) => {
  return (
    <div className={styles.container}>
      <img src={emptySvg} alt="no exercises" />
      <p>{title}</p>
      <p>{body}</p>
    </div>
  );
};

export default EmptyState;
