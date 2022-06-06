import styles from "./UserItem.module.css";

export default function UserItem(props) {
  return (
    <li className={styles["user-item"]}>{`${props.username} (${props.age} year${props.age > 1 ? "s" : ""
      } old)`}</li>
  );
}
