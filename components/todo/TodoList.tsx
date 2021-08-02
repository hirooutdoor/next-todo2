import styles from 'styles/Home.module.css'
import { EditForm } from 'components/form/EditForm'


type Props = {
  todos: {
    title: string
    status: string
  }[]
  onClickDelete: (index: number) => void
  onClickEdit: (index: number) => void
  onClickCancel: (index: number) => void
  onClickSubmit: (index: number) => void
  onChangeEditTitle: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeEditStatus:React.ChangeEventHandler<HTMLSelectElement>
  newTitle: string
  isEditing: boolean
}

export const TodoList: React.FC<Props> = (props) => {
  const {
    todos,
    onClickDelete,
    onClickEdit,
    onClickCancel,
    onClickSubmit,
    newTitle,
    isEditing,
    onChangeEditTitle,
    onChangeEditStatus
  } = props

  // const onClickEdit = () => {
  //   setEditing(true);
  // }

  return (
    <>
      {/* Add Conditional Rendering */}
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index} className={styles.list_row}>
              {isEditing ? (
                <EditForm
                  onClickCancel={() => onClickCancel(index)}
                  onClickSubmit={() => onClickSubmit(index)}
                  onChangeEditTitle={onChangeEditTitle}
                  onChangeEditStatus={onChangeEditStatus}
                  todo={todo}
                  newTitle={newTitle}
                />
              ) : (
                <>
                  <p className={styles.todo_title}>{todo.title}</p>
                  <p className={styles.todo_state}>{todo.status}</p>
                  <button
                    className={styles.edit_button}
                    onClick={() => onClickEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className={styles.delete_button}
                    onClick={() => onClickDelete(index)}
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
