import styles from 'styles/Pulldown.module.css'

type Props = {
  todoStatus: string
  onChangeTodoStatus: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const TodoState: React.FC<Props> = (props) => {
  const { todoStatus, onChangeTodoStatus } = props

  return (
    <>
      <div className={`${styles.select} ${styles.menu}`}>
        <select value={todoStatus} onChange={onChangeTodoStatus} required>
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
