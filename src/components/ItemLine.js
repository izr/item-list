import React from 'react'
import { withStyles } from '@material-ui/styles'
import classnames from 'classnames'

const lineStyles = theme => ({
  container: {
    backgroundColor: '#F6F6F6',
    flex: '1 0 100%',
    boxShadow: '5px 5px 3px -3px rgba(0,0,0,0.75)',
    marginTop: '10px',
    paddingLeft: '10px'
  },
  header: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'left',
  },
  attributes: {
    padding: '3px 20px',
    borderBottom: 'rgba(0, 0, 0, 0.12) solid 2px',
  },
  description: { padding: '3px' },
  index: { color: theme.palette.primary[400],  },
  headerItem: {
    marginRight: '100px',
  },
})

const item = ({ item, index, classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classnames(classes.index, classes.headerItem)}>
          {index}
        </div>
        <div className={classes.headerItem}>{item.title}</div>

        {item.attributes.map(a => (
          <div className={classes.headerItem} key={a}>
            {a}
          </div>
        ))}
      </div>
      <div className={classes.description}>{item.description}</div>
    </div>
  )
}

export default withStyles(lineStyles)(item)
