/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import style from "./NewTodo.module.css";

const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;

  const HandleSubmit = (event) => {
    event.preventDefault();
    props.onAddTodo(todo);
    setTodo({ title: "", desc: "" });
  };
  const HandleChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return {
        ...oldTodo,
        [name]: event.target.value,
      };
    });
  };
  return (
    <form className={style.form} onSubmit={HandleSubmit}>
      <div className={style["form-field"]}>
        <label htmlFor="title">Todo Title: </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={HandleChange}
        />
      </div>

      <div className={style["form-field"]}>
        <label htmlFor="desc">Description: </label>
        <textarea
          name="desc"
          id="desc"
          cols="10"
          rows="5"
          value={desc}
          onChange={HandleChange}
        ></textarea>
      </div>

      <button type="submit">Add To List</button>
    </form>
  );
};

export default NewTodo;
