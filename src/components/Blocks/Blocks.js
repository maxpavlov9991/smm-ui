import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  root: {
  },
  block: {
    minHeight: 100,
    minWidth: 100,
    backgroundColor: 'white',
    outline: '1px solid gray',
    transition: 'background-color 0.2s',
    '&:hover': {
      backgroundColor: 'coral',
      cursor: 'pointer'
    }
  }
})

export default function Blocks () {
  const classes = useStyles()

  return (
    <div>
      <Grid
        className={classes.root}
        container
        direction='row'
        justify='center'
        alignItems='center'
        spacing={2}
      >
        <Grid item>
          <div className={classes.block} />
        </Grid>
        <Grid item>
          <div className={classes.block} />
        </Grid>
        <Grid item>
          <div className={classes.block} />
        </Grid>
        <Grid item>
          <div className={classes.block} />
        </Grid>
        <Grid item>
          <div className={classes.block} />
        </Grid>
        <Grid item>
          <div className={classes.block} />
        </Grid>

      </Grid>
    </div>
  )
}
