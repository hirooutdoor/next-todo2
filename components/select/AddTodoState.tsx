import styles from 'styles/Pulldown.module.css'
import { memo, useContext } from 'react'
import { TodoContext } from 'providers/TodoProvider'

type Props = {
  todoStatus: string
  onChangeTodoStatus: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const AddTodoState: React.FC<Props> = memo((props) => {
  AddTodoState.displayName = 'AddTodoState'
  const { todoStatus, onChangeTodoStatus } = props
  const { isDisabled } = useContext(TodoContext)

  return (
    <>
      <div className={`${styles.select} ${styles.menu}`}>
        <select
          value={todoStatus}
          onChange={onChangeTodoStatus}
          required
          disabled={isDisabled}
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
})
