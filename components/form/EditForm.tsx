import styles from 'styles/Home.module.css'
import { EditTodoState } from 'components/select/EditTodoState'
import { useContext, memo } from 'react'
import { TodoContext } from 'providers/TodoProvider'

type Props = {
  onChangeEditTitle: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeEditStatus: React.ChangeEventHandler<HTMLSelectElement>
  onClickCancel: () => void
  onClickSubmit: () => void
}

export const EditForm: React.FC<Props> = memo((props) => {
  EditForm.displayName = 'EditForm';
  const {

    onChangeEditTitle,
    onChangeEditStatus,
    onClickCancel,
    onClickSubmit,
  } = props
  const { currentTodo } = useContext(TodoContext)
  

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
          onChangeEditStatus={onChangeEditStatus}
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
