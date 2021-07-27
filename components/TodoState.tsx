import styles from "../styles/Pulldown.module.css"

export const TodoState = () => {
  return (
    <>
    <div className={`${styles.cp_ipselect} ${styles.cp_sl03}`}>
        <select required>
          <option value="" hidden>Choose State</option>
          <option value={1}>Not Yet</option>
          <option value={2}>In Progress</option>
          <option value={3}>Done</option>
        </select>
      </div>
    </>
  )
}
