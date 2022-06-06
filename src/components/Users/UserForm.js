import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./UserForm.module.css";

export default function UserForm(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const onUsernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const onAgeChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0) {
      return;
    } else {
      props.onAddUser({ username, age: Number(age) });
      setUsername("");
      setAge("");
    }
  };
  return (
    <Card className={styles["user-form"]}>
      <form onSubmit={onSubmitHandler}>
        <section className={styles["user-form__section"]}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={onUsernameChangeHandler}
          />
        </section>
        <section className={styles["user-form__section"]}>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={onAgeChangeHandler}
            min="0"
          />
        </section>
        <Button type="submit" className={styles["user-form__button"]}>
          Add User
        </Button>
      </form>
    </Card>
  );
}
