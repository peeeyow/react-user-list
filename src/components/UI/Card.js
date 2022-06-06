import styles from "./Card.module.css";

export default function Card(props) {
  return (
    <section className={`${styles.card} ${props.className}`}>
      {props.children}
    </section>
  );
}
