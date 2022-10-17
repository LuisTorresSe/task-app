import styles from "./CountBoards.module.css";

interface Props {
  countBoards: Number;
}

export function CountBoards({ countBoards }: Props) {
  return (
    <div className={styles.containerBoards}>
      {" "}
      ALL BOARDS {countBoards.toString()}
    </div>
  );
}
