import styles from 'styles/Home.module.css'
import classnames from 'classnames'

type Props = {
  handleFilter: (stateFilter: string) => void
  handleHoverInFilter: (hoverInFilter: string) => void
  handleHoverOutFilter: () => void
  stateFilter: string
  hoverInFilter: string
}

export const StatusFilter: React.FC<Props> = (props) => {
  const { handleFilter, stateFilter, hoverInFilter, handleHoverInFilter, handleHoverOutFilter } = props

  return (
    <>
      <div className={styles.stateSort_area}>
        <p
          className={classnames({ [styles.is_active]: stateFilter === 'All' || hoverInFilter === 'All' })}
          onClick={() => handleFilter('All')} onMouseEnter={() => handleHoverInFilter('All')} onMouseLeave={handleHoverOutFilter}
        >
          All
        </p>
        <p
          className={classnames({
            [styles.is_active]: stateFilter === 'Not Yet'|| hoverInFilter === 'Not Yet',
          })}
          onClick={() => handleFilter('Not Yet') } onMouseEnter={() => handleHoverInFilter('Not Yet')} onMouseLeave={handleHoverOutFilter}
        >
          Not Yet
        </p>
        <p
          className={classnames({
            [styles.is_active]: stateFilter === 'In Progress'|| hoverInFilter === 'In Progress',
          })}
          onClick={() => handleFilter('In Progress')} onMouseEnter={() => handleHoverInFilter('In Progress')} onMouseLeave={handleHoverOutFilter}
        >
          In Progress
        </p>
        <p
          className={classnames({ [styles.is_active]: stateFilter === 'Done' || hoverInFilter === 'Done' })}
          onClick={() => handleFilter('Done')} onMouseEnter={() => handleHoverInFilter('Done')} onMouseLeave={handleHoverOutFilter}
        >
          Done
        </p>
      </div>
    </>
  )
}
