import { useState, useEffect, useCallback } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'
import { TodoList } from 'components/todo/TodoList'
import { AddForm } from 'components/form/AddForm'
import { OrderSortButton } from 'components/select/OrderSort'
import { StatusFilter } from 'components/filter/StatusFilter'
import { ContactSupport } from '@material-ui/icons'
import React from "react"

type TodoType = {
  title: string
  status: string
  isEditing: boolean
}

export default function Home() {
  console.log('Rendering check.') //for verification

  const [todos, setTodos] = useState<Array<TodoType>>([])
  const [inputTodo, setInputTodo] = useState<string>('')
  const [todoStatus, setTodoStatus] = useState<string>('')
  const [currentTodo, setCurrentTodo] = useState<Array<TodoType>>([])
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [clickFilter, setClickFilter] = useState<string>('All')
  const [hoverInFilter, setHoverInFilter] = useState<string>('All')
  const [orderSort, setOrderSort] = useState<string>('Oldest')

  /// ↓↓↓ CHANGE STATE ↓↓↓///

  // Add Form's Value of Todo and Status //
  const onChangeInputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setInputTodo(e.target.value)
  }

  const onChangeTodoStatus = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setTodoStatus(e.target.value)

  // Edit Form's Value of Todo //
  const onChangeEditTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setCurrentTodo({ ...currentTodo, title: e.target.value })
  }

  // Edit Form's Value of Status //
  const onChangeEditStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    setCurrentTodo({ ...currentTodo, status: e.target.value })
  }

  // Order Sort Value //
  const onChangeOrderSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    setOrderSort(e.target.value)
      // Sort Todos by Name //
  }

  // Filter Condition Switching //
    //Hover filter function //
  const hoverInFilterState = todos.filter((todo) => {
    if (hoverInFilter === 'All') return true
    if (hoverInFilter === 'Not Yet') return todo.status === 'Not Yet'
    if (hoverInFilter === 'In Progress') return todo.status === 'In Progress'
    if (hoverInFilter === 'Done') return todo.status === 'Done'
  })
    //Click filter function //
  const clickFilterState = todos.filter((todo) => {
    if (clickFilter === 'All') return true
    if (clickFilter === 'Not Yet') return todo.status === 'Not Yet'
    if (clickFilter === 'In Progress') return todo.status === 'In Progress'
    if (clickFilter === 'Done') return todo.status === 'Done'
  })
  
  const filterTodos = hoverInFilterState || clickFilterState
  
  useEffect(()=>{filterTodos},[filterTodos])  

  // Order Sort //
  // const sortByName = filterTodos.sort((a, b) => {
  //   if (a.title > b.title) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }

  // })
  // if (orderSort === 'Name') return console.log(sortByName)
  // if (orderSort === 'Newest') return console.log("Newest")
  // if (orderSort === 'Oldest') return console.log("Oldest")

  /// ↓↓↓ CLICK ACTION ↓↓↓///

  // Add Function //
  const onClickAdd = useCallback(() => {
    if (!inputTodo || todoStatus === '') return
    //if (isDisabled === true) return alert("Please complete editing.");
    const newTodo = {
      title: inputTodo,
      status: todoStatus,
      isEditing: false,
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
    setInputTodo('') //clear input
    setTodoStatus('') //clear status
  }, [todos, inputTodo, todoStatus])

  // Delete Function //
  const onClickDelete = useCallback(
    (index: number) => {
      //alert(index) //for verification
      //Ask Yes or No *** Add later ***
      const newTodos = [...todos]
      newTodos.splice(index, 1)
      setTodos(newTodos)
    },
    [todos]
  )

  // Edit Function //
  const onClickEdit = useCallback(
    (index: number) => {
      currentTodo.title = todos[index].title //set todo.title in edit form
      currentTodo.status = todos[index].status //set todo.status in edit form
      // alert(index) //for verification
      todos[index].isEditing = true
      setTodos([...todos])
      setIsDisabled(true)
    },
    [currentTodo, todos]
  )

  // Cancel Function //
  const onClickCancel = useCallback(
    (index: number) => {
      // alert(index) //for verification
      todos[index].isEditing = false
      setTodos([...todos])
      setIsDisabled(false)
    },
    [todos]
  )

  // Submit Function //
  const onClickSubmit = useCallback(
    (index: number) => {
      // alert(index) //for verification
      if (!currentTodo.title || !currentTodo.status) return
      todos[index].title = currentTodo.title
      todos[index].status = currentTodo.status
      todos[index].isEditing = false
      setCurrentTodo([...todos])
      setIsDisabled(false)
    },
    [todos, currentTodo.title, currentTodo.status]
  )

  // Filer Function //
  const handleClickFilter = useCallback((clickFilter: string) => {
    // alert(clickFilter) //for verification
    setClickFilter(clickFilter)
  }, [])

  const handleHoverInFilter = useCallback((hoverInFilter: string) => {
    console.log("hoge")
    setHoverInFilter(hoverInFilter)
  }, [])

  const handleHoverOutFilter = useCallback(() => {
    console.log("hoge")
    setHoverInFilter(clickFilter)
  }, [clickFilter])

  return (
    <div className={styles.container}>
      <Head>
        <title>Next TODO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.appTitle}>NEXT TODO</h1>

        {/* Add Form */}
        {todos.length >= 20 && (
          <p style={{ color: 'red' }}>You can only keep 20 todos at a time.</p>
        )}
        <AddForm
          inputTodo={inputTodo}
          todoStatus={todoStatus}
          onChange={onChangeInputTodo}
          onClick={onClickAdd}
          onChangeTodoStatus={onChangeTodoStatus}
          isDisabled={todos.length >= 20 || isDisabled}
        />

        {/* Todo List */}
        <div className={styles.card}>
          <div className={styles.list_head}>
            {/* Status Filter */}
            <StatusFilter
              clickFilter={clickFilter}
              hoverInFilter={hoverInFilter}
              handleClickFilter={handleClickFilter}
              handleHoverInFilter={handleHoverInFilter}
              handleHoverOutFilter={handleHoverOutFilter}
            />
            {/* Status Filter */}

            {/* Order Sort Button*/}
            <div className={styles.pulldown_orderSort}>
              <OrderSortButton orderSort={orderSort} onChangeOrderSort={onChangeOrderSort} />
            </div>
            {/* id & name Sort Button*/}
          </div>

          {/* List */}
          <TodoList
            todos={todos}
            onClickDelete={onClickDelete}
            onClickEdit={onClickEdit}
            onClickCancel={onClickCancel}
            onClickSubmit={onClickSubmit}
            onChangeEditTitle={onChangeEditTitle}
            onChangeEditStatus={onChangeEditStatus}
            currentTodo={currentTodo}
            isDisabled={isDisabled}
            filterTodos={filterTodos}
          />
          {/* List */}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
function title<T>(title: any, string: any) {
  throw new Error('Function not implemented.')
}
