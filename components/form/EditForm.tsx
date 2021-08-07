import styles from 'styles/Home.module.css'
import { EditTodoState } from 'components/select/EditTodoState'

type Props = {
  onChangeEditTitle: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeEditStatus: React.ChangeEventHandler<HTMLSelectElement>
  onClickCancel: () => void
  onClickSubmit: () => void
  currentTodo: {
    title: string
    status: string
    isEditing: boolean
  }
}

export const EditForm: React.FC<Props> = (props) => {
  const {
    currentTodo,
    onChangeEditTitle,
    onChangeEditStatus,
    onClickCancel,
    onClickSubmit,
  } = props
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
          currentTodo={currentTodo}
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
}
