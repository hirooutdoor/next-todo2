import styles from 'styles/Home.module.css'
import { TodoState } from 'components/button/TodoState'

type Props = {
  onChangeTodoTitle: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeTodoStatus: React.ChangeEventHandler<HTMLSelectElement>
  onClickCancel: (index: number) => void
  onSubmit: () => void
}

export const EditForm: React.FC<Props> = (props) => {
  const { onChangeTodoTitle, onChangeTodoStatus, onClickCancel, onSubmit } =
    props
  return (
    <>
      <input
        className={styles.input_edit}
        value=""
        type="text"
        onChange={onChangeTodoTitle}
      />
      <div className={styles.pull_down}>
        <TodoState onChangeTodoStatus={onChangeTodoStatus} />
      </div>
      <button className={styles.edit_button} onClick={() => onClickCancel}>
        Cancel
      </button>
      <button className={styles.edit_button} onClick={() => onSubmit}>
        Submit
      </button>
    </>
  )
}
