import styles from 'styles/Home.module.css'
import classnames from 'classnames'

type Props = {
  handleFilter: (stateFilter: string) => void
  stateFilter: string
}

export const StatusFilter: React.FC<Props> = (props) => {
  const { handleFilter, stateFilter } = props

  return (
    <>
      <div className={styles.stateSort_area}>
        <p
          className={classnames({ [styles.is_active]: stateFilter === 'All' })}
          onClick={() => handleFilter('All')}
        >
          All
        </p>
        <p
          className={classnames({
            [styles.is_active]: stateFilter === 'Not Yet',
          })}
          onClick={() => handleFilter('Not Yet')}
        >
          Not Yet
        </p>
        <p
          className={classnames({
            [styles.is_active]: stateFilter === 'In Progress',
          })}
          onClick={() => handleFilter('In Progress')}
        >
          In Progress
        </p>
        <p
          className={classnames({ [styles.is_active]: stateFilter === 'Done' })}
          onClick={() => handleFilter('Done')}
        >
          Done
        </p>
      </div>
    </>
  )
}
