import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

import MainContent from '../../components/MainContent'
import Blocks from '../../components/Blocks'
import SomeKeys from '../../components/SomeKeys'

const useStyles = makeStyles(theme => ({
  root: {
  },
  blocks: {
  },
  someKeys: {
  },
  grid: {
    padding: 0
  }
}))

const Main = (props) => {
  const classes = useStyles()

  useEffect(() => {
    props.loadData()
  }, [])

  return (
    <div className={classes.root}>

      <Grid
        container
        direction='row'
        justify='space-around'
        alignItems='center'
        wrap='nowrap'
      >
        <Grid
          container
          item
          direction='column'
          justify='space-between'
          alignItems='center'
          xs
        >
          <Grid item xs>
            <div>ASD</div>
            {/* <Blocks className={classes.blocks} /> */}
          </Grid>

          <Grid item xs>
            <SomeKeys className={classes.someKeys} />
          </Grid>
        </Grid>

        <Grid item className={classes.grid} lg>
          <MainContent data={props.data} />
        </Grid>

      </Grid>
    </div>
  )
}

export default Main
