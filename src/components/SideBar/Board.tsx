import styles from "./Board.module.css";

interface Props {
  boardName: string;
  id: Number;
  selectBoard: Number;
  handleSelectBoard: (select: number) => void;
}

export function Board({
  boardName,
  id,
  selectBoard,
  handleSelectBoard,
}: Props) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    handleSelectBoard(Number(e.currentTarget.id));
  };

  return (
    <button
      className={
        selectBoard === id
          ? `${styles.btnBoard} ${styles.selectBtnBoard}`
          : `${styles.btnBoard}`
      }
      onClick={handleClick}
      id={id.toString()}
    >
      <p className={styles.BoardName}>
        {" "}
        <span className="material-symbols-outlined">team_dashboard</span>
        {boardName}
      </p>
    </button>
  );
}
