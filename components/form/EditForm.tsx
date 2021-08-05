import styles from 'styles/Home.module.css'
import { TodoState } from 'components/button/TodoState'

type Props = {
  onChangeEditTitle: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeEditStatus: React.ChangeEventHandler<HTMLSelectElement>
  onClickCancel: (index: number) => void
  onClickSubmit: (index: number) => void
  newTitle: string;
  currentTodo: {
    title: string
    status: string
  }
  isEditing: boolean
}

export const EditForm: React.FC<Props> = (props) => {
  const {
    currentTodo,
    onChangeEditTitle,
    onChangeEditStatus,
    onClickCancel,
    onClickSubmit,
    isEditing
  } = props
  return (
    <>
      <input
        className={styles.input_edit}
        value={currentTodo.title}
        // value={todo.title}
        type="text"
        onChange={onChangeEditTitle}
      />
      <div className={styles.pull_down}>
        <TodoState onChangeEditStatus={onChangeEditStatus} currentTodo={currentTodo} isEditing={isEditing}/>
      </div>
      <button className={styles.edit_button} onClick={() => onClickCancel}>
        Cancel
      </button>
      <button className={styles.edit_button} onClick={() => onClickSubmit}>
        Submit
      </button>
    </>
  )
}
