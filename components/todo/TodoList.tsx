import styles from 'styles/Home.module.css'
import { EditForm } from 'components/form/EditForm'
import { useState } from 'react';

type Props = {
  todos: {
    title: string,
    status: string
  }[];
  onClickDelete: (index:number) => void;
  onClickEdit: (index:number) => void;
  onClickCancel:(index:number) => void;
  isEditing: boolean;
}

const onSubmit = (index:number) => {
  
}

export const TodoList: React.FC<Props> = (props) => {
  const { todos, isEditing, onClickDelete, onClickEdit, onClickCancel } = props

  
  const onChangeTodoTitle = (e:React.ChangeEvent<HTMLInputElement>) => {e.currentTarget.value}
  ;

  // const onClickEdit = () => {
  //   setEditing(true);
  // }

  return (
    <>
    {/* Add Ramification */}
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index} className={styles.list_row}>
              {isEditing ? (
                <EditForm 
                onClickCancel={()=> onClickCancel(index)} onSubmit={() => onSubmit(index)} onChangeTodoTitle={onChangeTodoTitle}
                />
              ) : (
                <>
                  <p className={styles.todo_title}>{todo.title}</p>
                  <p className={styles.todo_state}>{todo.status}</p>
                  <button className={styles.edit_button} onClick={() => onClickEdit(index)}>Edit</button>
                  <button className={styles.delete_button} onClick={() => onClickDelete(index)}>Delete</button>
                </>
              )}
            </li>
          )
        })}
      </ul>
    </>
  )
}
