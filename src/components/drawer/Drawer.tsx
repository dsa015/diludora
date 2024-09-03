import styles from "./Drawer.module.scss";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const Drawer = ({ isOpen, onClose, children }: DrawerProps) => {
  return (
    <>
      <div className={isOpen ? styles.overlay : ""}></div>
      <div
        className={`${styles.drawerContainer} ${
          isOpen ? styles.open : styles.close
        }`}
      >
        {/* TODO add close modal from button opton */}
        <button
          className={styles.Close}
          onClick={onClose}
          style={{ cursor: "pointer" }}
        >
          X
        </button>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
};
