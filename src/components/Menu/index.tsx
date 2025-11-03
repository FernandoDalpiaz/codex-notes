import { SquarePlusIcon, TrashIcon } from "lucide-react";
import styles from "./styles.module.css";

export function Menu() {
  return (
    <>
      <div className={styles["menu-container"]}>
        <a className={`${styles["menu-item"]} ${styles.create}`}>
          <SquarePlusIcon />
        </a>
        <a className={`${styles["menu-item"]} ${styles.delete}`}>
          <TrashIcon />
        </a>
      </div>
    </>
  );
}
