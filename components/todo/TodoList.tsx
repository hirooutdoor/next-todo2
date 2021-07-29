import styles from "styles/Home.module.css"
import { useState } from "react"

export const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      title: 'test1',
      status: 'Not Yet',
    },
    {
      title: 'test2',
      status: 'In Progress',
    },
    {
      title: 'test3',
      status: 'Done',
    },
  ])
  return (
    <>
      <ul>
        {todos.map((todo) => {
          return (
            <div key={todo.title} className={styles.list_row}>
              <li className={styles.todo_title}>{todo.title}</li>
              <p className={styles.todo_state}>{todo.status}</p>
              <button className={styles.edit_button}>Edit</button>
              <button className={styles.edit_button}>Delete</button>
            </div>
          )
        })}
      </ul>
    </>
  )
}
