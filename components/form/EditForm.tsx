import styles from 'styles/Home.module.css'
import { TodoState } from 'components/button/TodoState'

type Props = {
  onChangeEditTitle: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeEditStatus: React.ChangeEventHandler<HTMLSelectElement>
  onClickCancel: (index: number) => void
  onClickSubmit: (index: number) => void
  newTitle: string;
  todo: {
    title: string
    status: string
  }
}

export const EditForm: React.FC<Props> = (props) => {
  const {
    todo,
    onChangeEditTitle,
    onChangeEditStatus,
    onClickCancel,
    onClickSubmit,
    newTitle
  } = props
  return (
    <>
      <input
        className={styles.input_edit}
        value={newTitle}
        // value={todo.title}
        type="text"
        onChange={onChangeEditTitle}
      />
      <div className={styles.pull_down}>
        <TodoState onChangeEditStatus={onChangeEditStatus}/>
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
