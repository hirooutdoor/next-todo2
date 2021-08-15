import React, { FC, Dispatch, SetStateAction, createContext, ReactNode, useState } from 'react'

type TodoType = {
  title: string
  status: string
  isEditing: boolean
}

interface Props {
  children: ReactNode
}

export const TodoContext = createContext({} as {
  currentTodo: {
    title: string
    status: string
    isEditing: boolean
  }
  setCurrentTodo: Dispatch<SetStateAction<TodoType>>
});

export const TodoProvider:FC<Props> = (props) => {
  const { children } = props;

  const [ currentTodo, setCurrentTodo ] = useState<TodoType>({title: "", status: "", isEditing:false})

  return (
    <TodoContext.Provider value={{ currentTodo, setCurrentTodo }}>
      {children}
    </TodoContext.Provider>
  )
}
