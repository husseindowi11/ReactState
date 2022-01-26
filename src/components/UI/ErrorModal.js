import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";
const ErroModal = (props) => {
  const closeModal = () => {
      props.onCloseModal()
  }    
  return (
    <>
      <div className={styles.backdrop} onClick={closeModal}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={closeModal}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErroModal;
