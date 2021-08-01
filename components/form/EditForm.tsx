import styles from 'styles/Home.module.css'
import { TodoState } from 'components/button/TodoState'

type Props = {
  onChangeTodoTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTodoStatus: React.ChangeEventHandler<HTMLSelectElement>;
  onCancel:() => void;
  onSubmit: () => void;
}

export const EditForm: React.FC<Props> = (props) => {
  const { onChangeTodoTitle, onChangeTodoStatus, onCancel, onSubmit } = props
  return (
    <>
      <input
        className={styles.input_edit}
        value=""
        type="text"
        onChange={onChangeTodoTitle}
      />
      <div className={styles.pull_down}>
        <TodoState onChangeTodoStatus={onChangeTodoStatus}/>
      </div>
      <button className={styles.edit_button} onClick={() => onCancel}>Cancel</button>
      <button className={styles.edit_button} onClick={() => onSubmit}>Submit</button>
    </>
  )
}
