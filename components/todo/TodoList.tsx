import styles from 'styles/Home.module.css'

type Props = {
  todos: {
    title: string,
    status: string
  }[]
}

export const TodoList: React.FC<Props> = (props) => {
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
              <button className={styles.delete_button}>Delete</button>
            </div>
          )
        })}
      </ul>
    </>
  )
}
