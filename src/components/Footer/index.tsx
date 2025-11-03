import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#">
        Codex Notes &copy; {new Date().getFullYear()} - Feito por Fernando L.
        Dalpiaz
      </a>
    </footer>
  );
}
