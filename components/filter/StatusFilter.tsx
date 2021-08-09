import styles from 'styles/Home.module.css'

type Props = {
  handleFilter: () => void
}

export const StatusFilter: React.FC<Props> = (props) => {
  
  const {handleFilter} = props;

  return (
    <>
      <div className={styles.stateSort_area}>
        <p className={styles.is_active} onClick={handleFilter}>All</p>
        <p onClick={handleFilter}>Not Yet</p>
        <p onClick={handleFilter}>In Progress</p>
        <p onClick={handleFilter}>Done</p>
  </div>
  </>
  )
};