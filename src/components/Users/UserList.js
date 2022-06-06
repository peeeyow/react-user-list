import styles from "./UserList.module.css";
import UserItem from "./UserItem";
import Card from "../UI/Card";

export default function UserList(props) {
  return (
    <Card className={styles["item-list"]}>
      <ul>
        {props.users.map((user) => (
          <UserItem key={user.id} username={user.username} age={user.age} />
        ))}
      </ul>
    </Card>
  );
}
