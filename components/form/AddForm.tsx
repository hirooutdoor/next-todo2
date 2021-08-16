import styles from 'styles/Home.module.css'
import { AddTodoState } from 'components/select/AddTodoState'
import { memo, useContext } from 'react'
import { TodoContext } from 'providers/TodoProvider'

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeTodoStatus: React.ChangeEventHandler<HTMLSelectElement>
  onClick: () => void
  isDisabled: boolean
}

export const AddForm: React.FC<Props> = memo((props) => {
  AddForm.displayName = 'AddForm';
  const { onChange, onChangeTodoStatus, onClick, isDisabled } = props
  const { inputTodo } = useContext(TodoContext)
  const { todoStatus } = useContext(TodoContext)

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
              disabled={isDisabled}
            />
            <div className={styles.pull_down}>
            <AddTodoState
            todoStatus={todoStatus}
            onChangeTodoStatus={onChangeTodoStatus}
            isDisabled={isDisabled}
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