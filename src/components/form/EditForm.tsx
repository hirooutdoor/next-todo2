import styles from 'styles/Home.module.css'
import { EditTodoState } from 'src/components/select/EditTodoState'
import { useContext, memo } from 'react'
import { TodoContext } from 'src/providers/TodoProvider'
import { currentTodoRecoil } from 'src/store/todoGlobalState'
import { useRecoilState } from 'recoil'
import { Box, Button, HStack, Input } from '@chakra-ui/react'

type Props = {
  onClickCancel: () => void
  onClickSubmit: () => void
}

export const EditForm: React.FC<Props> = memo((props) => {
  EditForm.displayName = 'EditForm'
  console.log('Render EditForm')
  const { onClickCancel, onClickSubmit } = props
  // const { currentTodo, setCurrentTodo } = useContext(TodoContext)
  const [currentTodo, setCurrentTodo] = useRecoilState(currentTodoRecoil)

  const onChangeEditTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setCurrentTodo({ ...currentTodo, title: e.currentTarget.value })
  }

  return (
    <HStack>
      <Box>
        <Input
          rounded={10}
          mr={10}
          className={styles.input_edit}
          value={currentTodo.title}
          type="text"
          onChange={onChangeEditTitle}
        />
      </Box>
      <Box>
        <EditTodoState />
      </Box>
      <Box>
        <Button
          rounded={20}
          size="sm"
          fontWeight="400"
          onClick={onClickCancel}
        >
          Cancel
        </Button>
      </Box>
      <Box>
        <Button
          rounded={20}
          size="sm"
          fontWeight="400"
          color="blue.500"
          onClick={onClickSubmit}
        >
          Update
        </Button>
      </Box>
    </HStack>
  )
})
