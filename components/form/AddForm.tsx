import styles from 'styles/Home.module.css'
import { AddTodoState } from 'components/select/AddTodoState'

type Props = {
  inputTodo: string
  todoStatus: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeTodoStatus: React.ChangeEventHandler<HTMLSelectElement>
  onClick: () => void
  isDisabled: boolean
}

export const AddForm: React.FC<Props> = (props) => {
  const { inputTodo, todoStatus, onChange, onChangeTodoStatus, onClick, isDisabled } = props
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
}
