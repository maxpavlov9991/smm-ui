import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import MainContent from '../../components/MainContent'
import Blocks from '../../components/Blocks'
import SomeKeys from '../../components/SomeKeys'
import Footer from '../../components/Footer'

const useStyles = makeStyles(theme => ({
  root: {
  },
  blocks: {
    padding: theme.spacing(1),
    maxWidth: 400,
    minWidth: 300
  },
  someKeys: {
    maxWidth: 400,
    padding: theme.spacing(1)
  },
  left: {
    width: 400
  },
  right: {
    width: '100%'
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
        alignItems='flex-start'
        justify='flex-start'
        wrap='nowrap'
      >
        <Grid
          className={classes.left}
          item
          container
          direction='column'
          justify='space-between'
          alignItems='stretch'
        >

          <Grid item className={classes.blocks}>
            <Blocks />
          </Grid>

          <Grid item className={classes.someKeys}>
            <SomeKeys />
          </Grid>

        </Grid>

        <Grid
          item
          className={classes.right}
          zeroMinWidth
        >
          <MainContent data={props.data} />
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}

export default Main
