import { useState, useEffect, useCallback, useMemo, useContext } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'
import { TodoList } from 'src/components/todo/TodoList'
import { AddForm } from 'src/components/form/AddForm'
import { OrderSortButton } from 'src/components/select/OrderSort'
import { StatusFilter } from 'src/components/filter/StatusFilter'
import {
  InputTodoContext,
  SortContext,
  TodosContext,
  TodoStatusContext,
} from 'src/providers/TodoProvider'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { currentTodoRecoil, isDisabledState } from 'src/store/todoGlobalState'
import {
  Box,
  Heading,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useMessage } from 'src/hooks/useMessage'

export default function Home() {
  console.log('Render Parents') //for verification
  const [currentTodo, setCurrentTodo] = useRecoilState(currentTodoRecoil)
  const setIsDisabled = useSetRecoilState(isDisabledState)
  const { todos, setTodos } = useContext(TodosContext)
  const { inputTodo, setInputTodo } = useContext(InputTodoContext)
  const { todoStatus, setTodoStatus } = useContext(TodoStatusContext)
  const [clickFilter, setClickFilter] = useState<string>('All')
  const [hoverInFilter, setHoverInFilter] = useState<string>('All')
  const { orderSort } = useContext(SortContext)

  const { showMessage } = useMessage()

  const { colorMode, toggleColorMode } = useColorMode()
  const bgGradient = useColorModeValue("linear(to-l, blue.400, #7928CA,#FF0080)", "linear(to-r, blue.400, #7928CA,#FF0080)")

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
  useEffect(() => {
    filterTodos
  }, [filterTodos])

  // Order Sort //
  // const copyFilterTodos = filterTodos.slice()
  const copyFilterTodos = [...filterTodos]
  const orderSortTodos = copyFilterTodos.sort((a, b) => {
    if (orderSort === 'Oldest') return 1
    if (orderSort === 'Newest') return -1
    if (orderSort === 'Name') {
      if (a.title > b.title) {
        return 1
      } else {
        return -1
      }
    }
    return 0
  })

  /// ↓↓↓ CLICK ACTION ↓↓↓///
  // Add Function //
  const onClickAdd = useCallback(() => {
    if (!inputTodo || todoStatus === '')
      return showMessage({ title: 'Please fill out both.', status: 'warning' })
    const newTodo = {
      title: inputTodo,
      status: todoStatus,
      isEditing: false,
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
    setInputTodo('') //clear input
    setTodoStatus('') //clear status
    showMessage({ title: 'Successfully added. Fired up!🔥', status: 'success' })
  }, [
    todos,
    inputTodo,
    todoStatus,
    setTodos,
    setInputTodo,
    setTodoStatus,
    showMessage,
  ])

  // Delete Function //
  const onClickDelete = useCallback(
    (index: number) => {
      const askDelete = confirm('Are you sure?')
      if (askDelete) {
        const newTodos = [...orderSortTodos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
        showMessage({
          title: "Successfully deleted. Well done! It's time for 🍻!!",
          status: 'success',
        })
      } else {
        null
      }
    },
    [orderSortTodos, setTodos, showMessage]
  )

  // Edit Function //
  const onClickEdit = useCallback(
    (index: number) => {
      // Object.assign(currentTodo, {title: currentTodo.title, status: currentTodo.status}) //to ignore readonly value
      setCurrentTodo({
        ...currentTodo,
        title: orderSortTodos[index].title,
        status: orderSortTodos[index].status,
      })
      //currentTodo.title = orderSortTodos[index].title //set todo.title in edit form
      //currentTodo.status = orderSortTodos[index].status //set todo.status in edit form
      orderSortTodos[index].isEditing = true
      setIsDisabled(true)
      setTodos([...orderSortTodos])
      if (orderSort === 'Newest') return setTodos([...orderSortTodos].reverse())
    },
    [
      currentTodo,
      orderSortTodos,
      orderSort,
      setTodos,
      setIsDisabled,
      setCurrentTodo,
    ]
  )

  // Cancel Function //
  const onClickCancel = useCallback(
    (index: number) => {
      orderSortTodos[index].isEditing = false
      setTodos([...orderSortTodos])
      setIsDisabled(false)
      if (orderSort === 'Newest') return setTodos([...orderSortTodos].reverse())
    },
    [orderSortTodos, orderSort, setTodos, setIsDisabled]
  )

  // Submit Function //
  const onClickSubmit = useCallback(
    (index: number) => {
      if (!currentTodo.title || !currentTodo.status)
        return showMessage({
          title: 'Please fill out Todo.',
          status: 'warning',
        })
      if (
        currentTodo.title === orderSortTodos[index].title &&
        currentTodo.status === orderSortTodos[index].status
      ) {
        showMessage({ title: 'Not updated.', status: 'warning' })
      } else {
        showMessage({ title: '✨Successfully updated.✨', status: 'success' })
      }
      orderSortTodos[index].title = currentTodo.title
      orderSortTodos[index].status = currentTodo.status
      orderSortTodos[index].isEditing = false
      setTodos([...orderSortTodos])
      setIsDisabled(false)
    },
    [
      orderSortTodos,
      currentTodo.title,
      currentTodo.status,
      setTodos,
      setIsDisabled,
      showMessage,
    ]
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
        <Heading
          mb={8}
          bgClip="text"
          bgGradient={bgGradient}
          fontSize="6xl"
          fontWeight="extrabold"
        >
          NEXT TODO
        </Heading>
        <IconButton
          // _focus={{_focus: "none"}}
          mb={10}
          aria-label="DarkMode Switch"
          icon={colorMode === 'light' ? <MoonIcon /> : <FaSun />}
          onClick={toggleColorMode}
        />
        {/* Add Form */}
        {todos.length >= 20 && (
          <p style={{ color: 'red' }}>You can only keep 20 todos at a time.</p>
        )}
          <AddForm onClick={onClickAdd} />

        {/* Todo List */}
        <Box mt={10} minW="lg" minH="700px" rounded={20} borderWidth="2px">
          <VStack>
            <Box>
              <HStack p={10} mr={7} spacing="20px">
                <Box ml={10}>
                  <StatusFilter
                    clickFilter={clickFilter}
                    hoverInFilter={hoverInFilter}
                    handleClickFilter={handleClickFilter}
                    handleHoverInFilter={handleHoverInFilter}
                    handleHoverOutFilter={handleHoverOutFilter}
                  />
                </Box>
                <Box mr={10}>
                  <OrderSortButton />
                </Box>
              </HStack>
            </Box>
            {/* List */}
            <Box maxW="md">
              <TodoList
                onClickDelete={onClickDelete}
                onClickEdit={onClickEdit}
                onClickCancel={onClickCancel}
                onClickSubmit={onClickSubmit}
                filterTodos={filterTodos}
                orderSortTodos={orderSortTodos}
              />
            </Box>
          </VStack>
        </Box>
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
