import styles from 'styles/Pulldown.module.css'
import {memo, useContext} from "react"
import { TodoContext } from 'providers/TodoProvider';


type Props = {
  orderSort: string
  onChangeOrderSort: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const OrderSortButton:React.FC<Props> = memo((props) => {
  OrderSortButton.displayName = 'OrderSortButton';
  const {orderSort, onChangeOrderSort } = props;
  const { isDisabled } = useContext(TodoContext)

  return (
    <>
      <div className={`${styles.select} ${styles.menu}`}>
        <select value={orderSort} onChange={onChangeOrderSort} required disabled={isDisabled}>
          <option value="" hidden>
            Sort by
          </option>
          <option value="Oldest">Oldest</option>
          <option value="Newest">Newest</option>
          <option value="Name">Name</option>
        </select>
      </div>
    </>
  )
})
