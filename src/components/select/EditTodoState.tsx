import styles from 'styles/Pulldown.module.css'
import { memo, useContext } from 'react'
import { TodoContext } from 'src/providers/TodoProvider';
import { useRecoilState } from 'recoil';
import { currentTodoRecoil } from 'src/store/todoGlobalState';
import { Select } from '@chakra-ui/react';

export const EditTodoState: React.VFC = memo(() => {
  EditTodoState.displayName = 'EditTodoState';
  console.log('Render edit state')
  //const { currentTodo, setCurrentTodo } = useContext(TodoContext)
  const [ currentTodo, setCurrentTodo ] = useRecoilState(currentTodoRecoil)

  const onChangeEditStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    setCurrentTodo({ ...currentTodo, status: e.currentTarget.value })
  }

  return (
    <>
      <div>
        <Select rounded={20}
          value={currentTodo.status}
          onChange={onChangeEditStatus}
          required
        >
          <option value="" hidden>
            Choose Status
          </option>
          <option value="Not Yet">Not Yet</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </Select>
      </div>
    </>
  )
}
)