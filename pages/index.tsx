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
import { useMemo } from 'react'

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
  // const copyFilterTodos = filterTodos.slice()
  const copyFilterTodos = [...filterTodos]
  const orderSortTodos = copyFilterTodos.sort((a, b) => {
    if (orderSort === "Oldest") return 1;
    if (orderSort === "Newest") return -1;
    if (orderSort === "Name") {
      if (a.title > b.title) {
        return 1;
      } else {
        return -1;
      }
    }
  })
  useMemo(()=>{orderSortTodos},[orderSortTodos])
  console.log(orderSortTodos)

  /// ↓↓↓ CLICK ACTION ↓↓↓///

  // Add Function //
  const onClickAdd = useCallback(() => {
    if (!inputTodo || todoStatus === '') return
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
      const newTodos = [...orderSortTodos]
      newTodos.splice(index, 1)
      setTodos(newTodos)
    },
    [orderSortTodos]
  )

  // Edit Function //
  const onClickEdit = useCallback(
    (index: number) => {
      currentTodo.title = orderSortTodos[index].title //set todo.title in edit form
      currentTodo.status = orderSortTodos[index].status //set todo.status in edit form
      // alert(index) //for verification
      orderSortTodos[index].isEditing = true
      setTodos([...orderSortTodos])
      if (orderSort === "Newest") return setTodos([...orderSortTodos].reverse())
      setIsDisabled(true)
    },
    [currentTodo, orderSortTodos, orderSort]
  )

  // Cancel Function //
  const onClickCancel = useCallback(
    (index: number) => {
      // alert(index) //for verification
      orderSortTodos[index].isEditing = false
      setTodos([...orderSortTodos])
      if (orderSort === "Newest") return setTodos([...orderSortTodos].reverse())
      setIsDisabled(false)
    },
    [orderSortTodos, orderSort]
  )

  // Submit Function //
  const onClickSubmit = useCallback(
    (index: number) => {
      // alert(index) //for verification
      if (!currentTodo.title || !currentTodo.status) return
      orderSortTodos[index].title = currentTodo.title
      orderSortTodos[index].status = currentTodo.status
      orderSortTodos[index].isEditing = false
      setCurrentTodo([...orderSortTodos])
      setIsDisabled(false)
    },
    [orderSortTodos, currentTodo.title, currentTodo.status]
  )

  // Filer Function //
  const handleClickFilter = useCallback((clickFilter: string) => {
    // alert(clickFilter) //for verification
    setClickFilter(clickFilter)
  }, [])

  const handleHoverInFilter = useCallback((hoverInFilter: string) => {
    // console.log("hoge") //for verificaiton
    setHoverInFilter(hoverInFilter)
  }, [])

  const handleHoverOutFilter = useCallback(() => {
    // console.log("hoge") //for verificaiton
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
        <div className={styles.todo_card}>
          <div className={styles.list_head}>
            {/* Status Filter */}
            <StatusFilter
              clickFilter={clickFilter}
              hoverInFilter={hoverInFilter}
              handleClickFilter={handleClickFilter}
              handleHoverInFilter={handleHoverInFilter}
              handleHoverOutFilter={handleHoverOutFilter}
              isDisabled={isDisabled}
            />
            {/* Status Filter */}

            {/* Order Sort Button*/}
            <div className={styles.pulldown_orderSort}>
              <OrderSortButton orderSort={orderSort} onChangeOrderSort={onChangeOrderSort} isDisabled={isDisabled}/>
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
            orderSortTodos={orderSortTodos}
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
