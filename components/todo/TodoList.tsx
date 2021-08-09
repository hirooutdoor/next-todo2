import styles from 'styles/Home.module.css'
import { EditForm } from 'components/form/EditForm'

type Props = {
  todos: {
    title: string
    status: string
    isEditing: boolean
  }[]
  currentTodo: {
    title: string
    status: string
    isEditing: boolean
  }
  fileterTodos: {
    title: string
    status: string
    isEditing: boolean
  }[]
  onClickDelete: (index: number) => void
  onClickEdit: (index: number) => void
  onClickCancel: (index: number) => void
  onClickSubmit: (index: number) => void
  onChangeEditTitle: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeEditStatus: React.ChangeEventHandler<HTMLSelectElement>
  isDisabled: boolean
}

export const TodoList: React.FC<Props> = (props) => {
  const {
    todos,
    currentTodo,
    onClickDelete,
    onClickEdit,
    onClickCancel,
    onClickSubmit,
    onChangeEditTitle,
    onChangeEditStatus,
    isDisabled,
    fileterTodos
  } = props

  return (
    <>
      <ul>
        {fileterTodos.map((todo, index) => {
          return (
            <li key={index} className={styles.list_row}>
              {todo.isEditing ? (
                <EditForm
                  onClickCancel={() => onClickCancel(index)}
                  onClickSubmit={() => onClickSubmit(index)}
                  onChangeEditTitle={onChangeEditTitle}
                  onChangeEditStatus={onChangeEditStatus}
                  currentTodo={currentTodo}
                />
              ) : (
                <>
                  <p className={styles.todo_title}>{todo.title}</p>
                  <p className={styles.todo_state}>{todo.status}</p>
                  <button
                    className={styles.edit_button}
                    onClick={() => onClickEdit(index)}
                    disabled={isDisabled}
                  >
                    Edit
                  </button>
                  <button
                    className={styles.delete_button}
                    onClick={() => onClickDelete(index)}
                    disabled={isDisabled}
                  >
                    Delete
                  </button>
                </>
              )}
            </li>
          )
        })}
      </ul>
    </>
  )
}
