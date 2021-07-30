import styles from 'styles/Home.module.css'

export const TodoList = (props) => {
  const { todos } = props
  return (
    <>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={index} className={styles.list_row}>
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
