import styles from "./Board.module.css";

interface Props {
  boardName: string;
}

export function Board({ boardName }: Props) {
  return <button className={styles.btnBoard}>{boardName}</button>;
}
