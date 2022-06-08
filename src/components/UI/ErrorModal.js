import styles from "./ErrorModal.module.css";
import Button from "./Button";
import Card from "./Card";

export default function ErrorModal(props) {
  return (
    <div className={styles["modal__background"]} onClick={props.onClick}>
      <Card className={styles["modal__container"]}>
        <header>
          <h2 className={styles["modal__title"]}>{props.title}</h2>
        </header>
        <article>
          <p className={styles["modal__content"]}>{props.message}</p>
        </article>
        <footer>
          <Button className={styles["modal__button"]} onClick={props.onClick}>
            Okay
          </Button>
        </footer>
      </Card>
    </div>
  );
}
