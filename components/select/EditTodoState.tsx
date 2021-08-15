import styles from 'styles/Pulldown.module.css'
import { memo, useContext } from 'react'
import { TodoContext } from 'providers/TodoProvider';

type Props = {
  onChangeEditStatus: React.ChangeEventHandler<HTMLSelectElement>
}

export const EditTodoState: React.FC<Props> = memo((props) => {
  EditTodoState.displayName = 'EditTodoState';
  const {
    onChangeEditStatus,
  } = props
  const { currentTodo } = useContext(TodoContext)

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
)