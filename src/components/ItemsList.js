import React, { useState, useEffect, useReducer } from 'react'
import ItemCard from './ItemCard'
import ItemLine from './ItemLine'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'
import IconButton from '@material-ui/core/IconButton'
import GridOn from '@material-ui/icons/GridOn'
import List from '@material-ui/icons/List'
import ItemForm from './ItemForm'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  buttonsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexFlow: 'row wrap',
    alignContent: 'space-between',
  },
  controlButton: {
    flex: '1 0 40%',
    margin: '5px',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '5px',
  },
  items: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignContent: 'space-between',
  },
})

//function viewSwitch()

function itemsReducer(state, action) {
  switch (action.type) {
    case 'set':
      return action.payload
    case 'append':
      return action.payload ? [...state, action.payload] : state
    case 'prepend':
      return action.payload ? [action.payload, ...state] : state
    case 'removeFirst':
      return state.slice(1, state.length)
    case 'removeLast':
      return state.slice(0, state.length - 1)
    default:
      return state
  }
}

export default ({ initialItems }) => {
  const [items, dispatch] = useReducer(itemsReducer, [])
  const [listMode, setListMode] = useState('card')
  useEffect(() => {
    dispatch({ type: 'set', payload: initialItems })
  }, [initialItems])

  const classes = useStyles()
  console.log(items)
  return (
    <div>
      <div className={classes.buttonsContainer}>
        <Button
          className={classes.controlButton}
          variant="contained"
          color="primary"
          onClick={() => {
            if (items.length > 0)
              dispatch({
                type: 'prepend',
                payload: { ...items[items.length - 1] },
              })
          }}
        >
          Добавить в начало
        </Button>
        <Button
          className={classes.controlButton}
          variant="contained"
          color="primary"
          onClick={() => {
            if (items.length > 0)
              dispatch({ type: 'append', payload: { ...items[0] } })
          }}
        >
          Добавить в конец
        </Button>
        <Button
          className={classes.controlButton}
          variant="contained"
          color="primary"
          onClick={() => dispatch({ type: 'removeFirst' })}
        >
          Удалить первый
        </Button>
        <Button
          className={classes.controlButton}
          variant="contained"
          color="primary"
          onClick={() => dispatch({ type: 'removeLast' })}
        >
          Удалить последний
        </Button>
      </div>
      <div>
        <div className={classes.headerContainer}>
          <h4>Список объектов</h4>
          <div>
            <IconButton
              color={listMode === 'line' ? 'primary' : ''}
              disableRipple={true}
              onClick={() => setListMode('line')}
            >
              <List />
            </IconButton>
            <IconButton
              color={listMode === 'card' ? 'primary' : ''}
              disableRipple={true}
              onClick={() => setListMode('card')}
            >
              <GridOn />
            </IconButton>
          </div>
        </div>
      </div>
      <div className={classes.items}>
        {items.map((item, index) => renderItem(listMode, index, item))}
      </div>

      <Paper elevation={10}>
        <ItemForm
          onSubmit={item => dispatch({ type: 'append', payload: item })}
        />
      </Paper>
    </div>
  )
}

function renderItem(mode, index, item) {
  return mode === 'line' ? (
    <ItemLine key={index} item={item} index={index + 1} />
  ) : (
    <ItemCard key={index} item={item} index={index + 1} />
  )
}
