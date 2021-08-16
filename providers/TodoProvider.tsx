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
  todos: {
    title: string
    status: string
    isEditing: boolean
  }[],
  setTodos:Dispatch<SetStateAction<Array<TodoType>>>,
  inputTodo: string,
  setInputTodo: Dispatch<SetStateAction<string>>
});

export const TodoProvider:FC<Props> = (props) => {
  const { children } = props;

  const [ currentTodo, setCurrentTodo ] = useState<TodoType>({title: "", status: "", isEditing:false})
  const [ todos, setTodos ] = useState<Array<TodoType>>([])
  const [inputTodo, setInputTodo] = useState<string>('')
  
  const value = {
  currentTodo,
  setCurrentTodo,
  todos,
  setTodos,
  inputTodo,
  setInputTodo
  }

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  )
}
