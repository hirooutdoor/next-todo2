import styles from 'styles/Home.module.css'
import { TodoState } from 'components/button/TodoState'

type Props = {
  inputTodo: string
  todoStatus: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeTodoStatus: React.ChangeEventHandler<HTMLSelectElement>;
  onClick: () => void
}

export const AddForm: React.FC<Props> = (props) => {
  const { inputTodo, todoStatus, onChange, onChangeTodoStatus, onClick } = props
  return (
    <>
      <div className={styles.card}>
        <div className={styles.input_area}>
          <input
            className={styles.input}
            type="text"
            placeholder="Input what to do here"
            value={inputTodo}
            onChange={onChange}
          />
          <div className={styles.pull_down}>
            <TodoState
              todoStatus={todoStatus}
              onChangeTodoStatus={onChangeTodoStatus}
            />
          </div>
          <button className={styles.add_button} onClick={onClick}>
            Add
          </button>
        </div>
      </div>
    </>
  )
}
