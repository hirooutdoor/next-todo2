import React, {
  FC,
  Dispatch,
  SetStateAction,
  createContext,
  ReactNode,
  useState,
} from 'react'

type TodoType = {
  title: string
  status: string
  isEditing: boolean
}

interface Props {
  children: ReactNode
}

export const DisableContext = createContext(
  {} as {
    isDisabled: boolean
    setIsDisabled: Dispatch<SetStateAction<boolean>>
  }
)

export const TodoContext = createContext(
  {} as {
    currentTodo: {
      title: string
      status: string
      isEditing: boolean
    }
    setCurrentTodo: Dispatch<SetStateAction<TodoType>>
  }
)

export const TodosContext = createContext(
  {} as {
    todos: {
      title: string
      status: string
      isEditing: boolean
    }[]
    setTodos: Dispatch<SetStateAction<Array<TodoType>>>
  }
)

export const InputTodoContext = createContext(
  {} as {
    inputTodo: string
    setInputTodo: Dispatch<SetStateAction<string>>
  }
)

export const TodoStatusContext = createContext(
  {} as {
    todoStatus: string
    setTodoStatus: Dispatch<SetStateAction<string>>
  }
)

export const SortContext = createContext({} as {
  orderSort: string
  setOrderSort: Dispatch<SetStateAction<string>>
})

export const TodoProvider: FC<Props> = (props) => {
  const { children } = props
  const [currentTodo, setCurrentTodo] = useState<TodoType>({
    title: '',
    status: '',
    isEditing: false,
  })
  const [todos, setTodos] = useState<Array<TodoType>>([])
  const [inputTodo, setInputTodo] = useState<string>('')
  const [todoStatus, setTodoStatus] = useState<string>('')
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [orderSort, setOrderSort] = useState<string>('Oldest')

  const value = {
    currentTodo,
    setCurrentTodo,
  }

  const todosValue = {
    todos,
    setTodos,
  }

  const inputValue = {
    inputTodo,
    setInputTodo,
  }

  const statusValue = {
    todoStatus,
    setTodoStatus,
  }

  const sortValue = {
    orderSort,
    setOrderSort
  }

  const disableValue = {
    isDisabled,
    setIsDisabled
  }

  return (
    // <TodoContext.Provider value={value}>
      // <DisableContext.Provider value={disableValue} >
        <TodosContext.Provider value={todosValue}>
          <InputTodoContext.Provider value={inputValue}>
            <TodoStatusContext.Provider value={statusValue}>
              <SortContext.Provider value={sortValue} >
                {children}
              </SortContext.Provider>
            </TodoStatusContext.Provider>
          </InputTodoContext.Provider>
        </TodosContext.Provider>
      // </DisableContext.Provider>
    // </TodoContext.Provider>
  )
}
