import styles from "./HeaderSideBar.module.css";

export function HeaderSideBar() {
  return (
    <div className={styles.HeaderSideBar}>
      <div>
        <span className="material-symbols-outlined ">favorite</span>
      </div>
      <h2>TASK APP</h2>
    </div>
  );
}
