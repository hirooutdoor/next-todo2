import styles from 'styles/Home.module.css'
import classnames from 'classnames'
import { memo, useContext } from 'react'
import { TodoContext } from 'providers/TodoProvider'

type Props = {
  handleClickFilter: (clickFilter: string) => void
  handleHoverInFilter: (hoverInFilter: string) => void
  handleHoverOutFilter: () => void
  clickFilter: string
  hoverInFilter: string
}

export const StatusFilter: React.FC<Props> = memo((props) => {
  StatusFilter.displayName = 'StatusFilter'
  const {
    handleClickFilter,
    clickFilter,
    hoverInFilter,
    handleHoverInFilter,
    handleHoverOutFilter,
  } = props

  const { isDisabled } = useContext(TodoContext)

  return (
    <>
      <div className={styles.stateSort_area}>
        <p
          className={classnames(
            {
              [styles.is_active]:
                clickFilter === 'All' || hoverInFilter === 'All',
            },
            { [styles.is_nonactive]: isDisabled === true }
          )}
          onClick={() => handleClickFilter('All')}
          onMouseEnter={() => handleHoverInFilter('All')}
          onMouseLeave={handleHoverOutFilter}
        >
          All
        </p>
        <p
          className={classnames(
            {
              [styles.is_active]:
                clickFilter === 'Not Yet' || hoverInFilter === 'Not Yet',
            },
            { [styles.is_nonactive]: isDisabled === true }
          )}
          onClick={() => handleClickFilter('Not Yet')}
          onMouseEnter={() => handleHoverInFilter('Not Yet')}
          onMouseLeave={handleHoverOutFilter}
        >
          Not Yet
        </p>
        <p
          className={classnames(
            {
              [styles.is_active]:
                clickFilter === 'In Progress' ||
                hoverInFilter === 'In Progress',
            },
            { [styles.is_nonactive]: isDisabled === true }
          )}
          onClick={() => handleClickFilter('In Progress')}
          onMouseEnter={() => handleHoverInFilter('In Progress')}
          onMouseLeave={handleHoverOutFilter}
        >
          In Progress
        </p>
        <p
          className={classnames(
            {
              [styles.is_active]:
                clickFilter === 'Done' || hoverInFilter === 'Done',
            },
            { [styles.is_nonactive]: isDisabled === true }
          )}
          onClick={() => handleClickFilter('Done')}
          onMouseEnter={() => handleHoverInFilter('Done')}
          onMouseLeave={handleHoverOutFilter}
        >
          Done
        </p>
      </div>
    </>
  )
})
