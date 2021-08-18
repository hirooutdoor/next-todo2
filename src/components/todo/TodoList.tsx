import styles from 'styles/Home.module.css'
import { EditForm } from 'src/components/form/EditForm'
import { memo, useContext } from 'react'
import { DisableContext, TodoContext } from 'src/providers/TodoProvider'
import { useRecoilValue } from 'recoil'
import { isDisabledState } from 'src/store/todoGlobalState'

type Props = {
  filterTodos: {
    title: string
    status: string
    isEditing: boolean
  }[]
  orderSortTodos: {
    title: string
    status: string
    isEditing: boolean
  }[]
  onClickDelete: (index: number) => void
  onClickEdit: (index: number) => void
  onClickCancel: (index: number) => void
  onClickSubmit: (index: number) => void
}

export const TodoList: React.FC<Props> = memo((props) => {
  TodoList.displayName = 'TodoList';
  console.log('Render Todolist')
  const {
    onClickDelete,
    onClickEdit,
    onClickCancel,
    onClickSubmit,
    orderSortTodos
  } = props

  //const { isDisabled } = useContext(DisableContext)
  const isDisabled = useRecoilValue(isDisabledState)

  return (
    <>
      <ul>
        {orderSortTodos.map((todo, index) => {
          return (
            <li key={index} className={styles.list_row}>
              {todo.isEditing ? (
                <EditForm
                  onClickCancel={() => onClickCancel(index)}
                  onClickSubmit={() => onClickSubmit(index)}
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
})

