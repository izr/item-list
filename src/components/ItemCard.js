import React from 'react'
import { withStyles } from '@material-ui/styles'

const cardStyles = theme => ({
  container: {
    backgroundColor: '#F6F6F6',
    padding: '5px',
    margin: '5px',
    flex: '1 0 30%',
    boxShadow: '5px 5px 3px -3px rgba(0,0,0,0.75)',
    minHeight: '50px',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: 'rgba(0, 0, 0, 0.12) solid 2px',
  },
  attributes: {
    padding: '3px 20px',
    borderBottom: 'rgba(0, 0, 0, 0.12) solid 2px',
    minHeight: '50px'
  },
  description: { padding: '3px' },
  index: { color: theme.palette.primary[400] },
})

const item = ({ item, index, classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.title}>{item.title}</div>{' '}
        <div className={classes.index}>{index}</div>
      </div>
      <div className={classes.attributes}>
        {item.attributes.map(a => (
          <div key={a}>{a}</div>
        ))}
      </div>
      <div className={classes.description}>{item.description}</div>
    </div>
  )
}

export default withStyles(cardStyles)(item)
