import { NotebookPen } from "lucide-react";
import styles from "./styles.module.css";
export function Logo() {
  return (
    <>
      <div className={styles.logo}>
        <a className={styles.logoLink} href="/">
          <NotebookPen />
          <span>Codex</span>
        </a>
      </div>
    </>
  );
}
