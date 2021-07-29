import styles from "styles/Home.module.css"
import { TodoState } from "components/button/TodoState"

export const AddForm = (props) => {

  const {inputTodo, onChange, onClick} = props;
  return(
      <>
        <div className={styles.card}>
          <div className={styles.input_area}>
            <input
              className={styles.input}
              type="text"
              placeholder="Input what to do here"
              value={inputTodo}
              onChange={onChange}
            />
            <div className={styles.pull_down}>
              <TodoState />
            </div>
            <button className={styles.add_button} onClick={onClick}>Add</button>
          </div>
        </div>
      </>
  )
}