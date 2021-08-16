import styles from 'styles/Home.module.css'
import { AddTodoState } from 'components/select/AddTodoState'
import { memo, useContext } from 'react'
import { TodoContext } from 'providers/TodoProvider'

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeTodoStatus: React.ChangeEventHandler<HTMLSelectElement>
  onClick: () => void
}

export const AddForm: React.FC<Props> = memo((props) => {
  AddForm.displayName = 'AddForm';
  const { onChange, onChangeTodoStatus, onClick } = props
  const { inputTodo } = useContext(TodoContext)
  const { todoStatus } = useContext(TodoContext)
  const { isDisabled } = useContext(TodoContext)
  const { todos } = useContext(TodoContext)

  return (
    <>
      <div className={styles.card}>
        <div className={styles.input_area}>
            <input
              className={styles.input_add}
              type="text"
              placeholder="Input what to do here"
              value={inputTodo}
              onChange={onChange}
              disabled={todos.length >= 20 || isDisabled}
            />
            <div className={styles.pull_down}>
            <AddTodoState
            todoStatus={todoStatus}
            onChangeTodoStatus={onChangeTodoStatus}
            />
            </div>
            <button className={styles.add_button} onClick={onClick} disabled={isDisabled} >
            Add
            </button>
        </div>
        </div>
        </>
  )
})