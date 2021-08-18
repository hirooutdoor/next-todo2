import styles from 'styles/Home.module.css'
import { EditTodoState } from 'src/components/select/EditTodoState'
import { useContext, memo } from 'react'
import { TodoContext } from 'src/providers/TodoProvider'
import { currentTodoRecoil } from 'src/store/todoGlobalState'
import { useRecoilState } from 'recoil'

type Props = {
  onClickCancel: () => void
  onClickSubmit: () => void
}

export const EditForm: React.FC<Props> = memo((props) => {
  EditForm.displayName = 'EditForm';
  console.log('Render EditForm')
  const {
    onClickCancel,
    onClickSubmit,
  } = props
  // const { currentTodo, setCurrentTodo } = useContext(TodoContext)
  const [ currentTodo, setCurrentTodo ] = useRecoilState(currentTodoRecoil)
  
  const onChangeEditTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setCurrentTodo({ ...currentTodo, title: e.currentTarget.value })
  }

  return (
    <>
      <input
        className={styles.input_edit}
        value={currentTodo.title}
        type="text"
        onChange={onChangeEditTitle}
      />
      <div className={styles.pull_down}>
        <EditTodoState
        />
      </div>
      <button className={styles.edit_button} onClick={onClickCancel}>
        Cancel
      </button>
      <button className={styles.edit_button} onClick={onClickSubmit}>
        Update
      </button>
    </>
  )
})
