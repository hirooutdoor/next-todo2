import styles from 'styles/Pulldown.module.css'

type Props = {
  todos: {
    title: string
    status: string
    isEditing: boolean
  }[],
  todoStatus: string
  onChangeTodoStatus: (e: React.ChangeEvent<HTMLSelectElement>) => void
  onChangeEditStatus: React.ChangeEventHandler<HTMLSelectElement>
  isEditing: boolean
  currentTodo: {
    title: string
    status: string
  }
}

export const AddTodoState: React.FC<Props> = (props) => {
  const {
    todoStatus,
    onChangeTodoStatus,
    onChangeEditStatus,
    currentTodo
  } = props

  return (
    <>
      <div className={`${styles.select} ${styles.menu}`}>
        <select
          value={todoStatus}
          onChange={onChangeTodoStatus}
          required
        >
          <option value="" hidden>
            Choose Status
          </option>
          <option value="Not Yet">Not Yet</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
    </>
  )
}
