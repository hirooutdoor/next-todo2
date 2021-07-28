import styles from '../styles/Pulldown.module.css'

export const OrderSortButton = () => {
  return (
    <>
      <div className={`${styles.select} ${styles.menu}`}>
        <select required>
          <option value="" hidden>
            Sort by
          </option>
          <option value={1}>Newest</option>
          <option value={2}>Oldest</option>
          <option value={3}>Name</option>
        </select>
      </div>
    </>
  )
}
