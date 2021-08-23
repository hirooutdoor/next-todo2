import styles from 'styles/Home.module.css'
import { AddTodoState } from 'src/components/select/AddTodoState'
import { memo, useContext } from 'react'
import {
  DisableContext,
  InputTodoContext,
  TodosContext,
} from 'src/providers/TodoProvider'
import { useRecoilValue } from 'recoil'
import { isDisabledState } from 'src/store/todoGlobalState'
import { Box, Button, HStack, Input } from '@chakra-ui/react'

type Props = {
  onClick: () => void
}

export const AddForm: React.FC<Props> = memo((props) => {
  AddForm.displayName = 'AddForm'
  console.log('Render Add form')

  const { onClick } = props
  const { inputTodo, setInputTodo } = useContext(InputTodoContext)
  // const { isDisabled } = useContext(DisableContext)
  const isDisabled = useRecoilValue(isDisabledState)
  const { todos } = useContext(TodosContext)

  // Add Form's Value of Todo and Status //
  const onChangeInputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setInputTodo(e.target.value)
  }

  return (
    <>
      <Box minW="lg" maxH="sm" rounded={20} borderWidth="2px">
        <HStack spacing="20px">
          <Box>
            <Input
              rounded={10}
              m={10}
              pr={30}
              pl={30}
              type="text"
              placeholder="Input what to do here"
              value={inputTodo}
              onChange={onChangeInputTodo}
              disabled={todos.length >= 20 || isDisabled}
            />
          </Box>
          <Box>
              <AddTodoState />
          </Box>
          <Box>
            <Button
              mr={10}
              rounded={20}
              onClick={onClick}
              disabled={isDisabled}
            >
              Add
            </Button>
          </Box>
        </HStack>
      </Box>
    </>
  )
})
