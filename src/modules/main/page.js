import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

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
  mainContent: {

  }
}))

const Main = (props) => {
  const classes = useStyles()

  useEffect(() => {
    props.loadData()
  }, [])

  return (
    <div className={classes.root}>

      <Typography variant='h6' align='center'>MAIN PAGE</Typography>

      <Grid container spacing={1}>
        <Grid container item spacing={1}>
          <Grid item>
            <Blocks className={classes.blocks} />
          </Grid>

          <Grid item>
            <SomeKeys className={classes.someKeys} />
          </Grid>
        </Grid>

        <Grid item>
          <MainContent className={classes.mainContent} data={props.data} />
        </Grid>

      </Grid>
    </div>
  )
}

export default Main
