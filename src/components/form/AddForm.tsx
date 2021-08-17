import styles from 'styles/Home.module.css'
import { AddTodoState } from 'src/components/select/AddTodoState'
import { memo, useContext } from 'react'
import {
  DisableContext,
  InputTodoContext,
  TodoContext,
  TodosContext,
} from 'src/providers/TodoProvider'


type Props = {
  onClick: () => void
}

export const AddForm: React.FC<Props> = memo((props) => {
  AddForm.displayName = 'AddForm'
  console.log('Render Add form')

  const { onClick } = props
  const { inputTodo, setInputTodo } = useContext(InputTodoContext)
  const { isDisabled } = useContext(DisableContext)
  const { todos } = useContext(TodosContext)

  // Add Form's Value of Todo and Status //
  const onChangeInputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setInputTodo(e.target.value)
  }

  return (
    <>
      <div className={styles.card}>
        <div className={styles.input_area}>
          <input
            className={styles.input_add}
            type="text"
            placeholder="Input what to do here"
            value={inputTodo}
            onChange={onChangeInputTodo}
            disabled={todos.length >= 20 || isDisabled}
          />
          <div className={styles.pull_down}>
            <AddTodoState />
          </div>
          <button
            className={styles.add_button}
            onClick={onClick}
            disabled={isDisabled}
          >
            Add
          </button>
        </div>
      </div>
    </>
  )
})
