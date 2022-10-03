import styles from "./styles.module.css";
import { FiTrash2 } from "react-icons/fi";

const DeleteBtn = ({ deleteHandler, id }) => {
  return (
    <button
      id={id}
      className={`${styles.container} ${styles.delete}`}
      onClick={deleteHandler}
    >
      <FiTrash2 size="20" className={styles.icon} />
    </button>
  );
};

export default DeleteBtn;
