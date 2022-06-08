import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./UserForm.module.css";

export default function UserForm(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorInfo, setErrorInfo] = useState(null);

  const onUsernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const onAgeChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setErrorInfo({
        title: "Invalid Input",
        message: "Name and age must not be empty!",
      });
      setIsModalOpen(true);
      return;
    }
    if (Number(age) < 0) {
      setErrorInfo({
        title: "Invalid Age",
        message: "Age must be non-negative!",
      });
      setIsModalOpen(true);
      return;
    }
    props.onAddUser({ username, age: Number(age) });
    setUsername("");
    setAge("");
  };
  const onOkayHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && <ErrorModal onClick={onOkayHandler} {...errorInfo} />}
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
            />
          </section>
          <Button type="submit" className={styles["user-form__button"]}>
            Add User
          </Button>
        </form>
      </Card>
    </>
  );
}
