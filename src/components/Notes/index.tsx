import { SquareMinusIcon } from "lucide-react";
import styles from "./styles.module.css";

export function Notes() {
  return (
    <div className={styles["notes-container"]}>
      <h1 className={styles.heading}>Anotações</h1>
      <ul>
        <div className={styles["note-item"]}>
          <li className={styles.text}>
            Essa é uma anotação teste, Essa é uma anotação teste, Essa é uma
            anotação teste, Essa é uma anotação teste,
          </li>
          <a className={styles.delete}>
            <SquareMinusIcon color="#991b1b" />
          </a>
        </div>
        <div className={styles["note-item"]}>
          <li className={styles.text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
            deserunt quas sequi praesentium officia soluta magni culpa odit
            quisquam enim illum numquam veritatis cupiditate tenetur explicabo
            dolores nesciunt quis labore dolor commodi, ea exercitationem
            dolorum. Itaque asperiores magni rerum necessitatibus!
          </li>
          <a className={styles.delete}>
            <SquareMinusIcon color="#991b1b" />
          </a>
        </div>
      </ul>
    </div>
  );
}
