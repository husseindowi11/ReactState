import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErroModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input:',
        message: "Please enter valid age or username."
      })
      return;
    }

    if (+age < 1) {
      setError({
        title: 'Invalid age:',
        message: "Please enter a valid age greater than zero."
      })
      return;
    }
    props.onAddUser(username, age);
    setUsername("");
    setAge("");
  };



  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <>
      {error && <ErroModal onCloseModal={errorHandler} title={ error.title } message={ error.message }/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={username || ""}
          ></input>

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={age || ""}
          ></input>

          <Button type={"submit"}>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
