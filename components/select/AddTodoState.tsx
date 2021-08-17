import styles from 'styles/Pulldown.module.css'
import { memo, useContext } from 'react'
import { TodoContext, TodoStatusContext } from 'providers/TodoProvider'

export const AddTodoState: React.VFC = memo(() => {
  AddTodoState.displayName = 'AddTodoState'
  console.log('Render Add state')
  const { todoStatus, setTodoStatus } = useContext(TodoStatusContext)
  const { isDisabled } = useContext(TodoContext)

  const onChangeTodoStatus = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setTodoStatus(e.target.value)

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
