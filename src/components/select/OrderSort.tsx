import styles from 'styles/Pulldown.module.css'
import { memo, useContext } from 'react'
import {
  DisableContext,
  SortContext,
  TodoContext,
} from 'src/providers/TodoProvider'
import { isDisabledState } from 'src/store/todoGlobalState'
import { useRecoilValue } from 'recoil'
import { Select } from '@chakra-ui/react'

export const OrderSortButton: React.VFC = memo(() => {
  OrderSortButton.displayName = 'OrderSortButton'
  console.log('Render Order Sort')

  //const { isDisabled } = useContext(DisableContext)
  const isDisabled = useRecoilValue(isDisabledState)
  const { orderSort, setOrderSort } = useContext(SortContext)

  const onChangeOrderSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    setOrderSort(e.target.value)
  }

  return (
    <>
      <Select
        
        rounded={20}
        value={orderSort}
        onChange={onChangeOrderSort}
        required
        disabled={isDisabled}
      >
        <option value="" hidden>
          Sort by
        </option>
        <option value="Oldest">Oldest</option>
        <option value="Newest">Newest</option>
        <option value="Name">Name</option>
      </Select>
    </>
  )
})
