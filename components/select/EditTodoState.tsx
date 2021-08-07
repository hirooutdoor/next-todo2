import styles from 'styles/Pulldown.module.css'

type Props = {
  onChangeEditStatus: React.ChangeEventHandler<HTMLSelectElement>
  currentTodo: {
    title: string
    status: string
    isEditing: boolean;
  }
}

export const EditTodoState: React.FC<Props> = (props) => {
  const {
    onChangeEditStatus,
    currentTodo
  } = props

  return (
    <>
      <div className={`${styles.select} ${styles.menu}`}>
        <select
          value={currentTodo.status}
          onChange={onChangeEditStatus}
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
