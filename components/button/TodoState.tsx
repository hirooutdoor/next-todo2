import styles from 'styles/Pulldown.module.css'

export const TodoState = () => {
  return (
    <>
      <div className={`${styles.select} ${styles.menu}`}>
        <select required>
          <option value="" hidden>
            Choose Status
          </option>
          <option value={1}>Not Yet</option>
          <option value={2}>In Progress</option>
          <option value={3}>Done</option>
        </select>
      </div>
    </>
  )
}
