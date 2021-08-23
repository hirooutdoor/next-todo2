import styles from 'styles/Home.module.css'
import { EditForm } from 'src/components/form/EditForm'
import { memo, useContext } from 'react'
import { DisableContext, TodoContext } from 'src/providers/TodoProvider'
import { useRecoilValue } from 'recoil'
import { isDisabledState } from 'src/store/todoGlobalState'
import {
  Box,
  Button,
  HStack,
  List,
  ListItem,
  StackDivider,
  Tag,
  TagLabel,
  VStack,
} from '@chakra-ui/react'

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
  TodoList.displayName = 'TodoList'
  console.log('Render Todolist')
  const {
    onClickDelete,
    onClickEdit,
    onClickCancel,
    onClickSubmit,
    orderSortTodos,
  } = props

  //const { isDisabled } = useContext(DisableContext)
  const isDisabled = useRecoilValue(isDisabledState)

  return (
    <>
      <VStack divider={<StackDivider borderColor="gray.300" />} align="stretch">
        <List>
        <VStack divider={<StackDivider borderColor="gray.300" />} align="stretch">
          {orderSortTodos.map((todo, index) => {
            return (
              <Box key={index} h="40px">
                <ListItem listStyleType="none">
                    {todo.isEditing ? (
                    <HStack minW="md" maxW="lg">
                      <Box>
                        <EditForm
                          onClickCancel={() => onClickCancel(index)}
                          onClickSubmit={() => onClickSubmit(index)}
                        />
                      </Box>
                    </HStack>
                    ) : (
                      <HStack minW="md">
                        <Box>
                          <p className={styles.todo_title}>{todo.title}</p>
                        </Box>
                        <Box>
                          <Tag variant="outline" colorScheme="blue" borderRadius="full">
                            <TagLabel>
                              {todo.status}
                            </TagLabel>
                          </Tag>
                        </Box>
                        <Box>
                          <Button
                            rounded={20}
                            size="sm"
                            fontWeight="400"
                            color="blue.500"
                            onClick={() => onClickEdit(index)}
                            disabled={isDisabled}
                          >
                            Edit
                          </Button>
                        </Box>
                        <Box>
                          <Button
                            fontWeight="400"
                            rounded={20}
                            size="sm"
                            color="tomato"
                            className={styles.delete_button}
                            onClick={() => onClickDelete(index)}
                            disabled={isDisabled}
                          >
                            Delete
                          </Button>
                        </Box>
                      </HStack>
                    )}
                </ListItem>
              </Box>
            )
          })}
          </VStack>
        </List>
      </VStack>
    </>
  )
})
