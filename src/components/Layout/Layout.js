import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'

import Header from '../Header'

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 700
  },
  content: {
    flexGrow: 1
  },
  toolbar: theme.mixins.toolbar
}))

const Layout = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <div className={classes.toolbar} />
      {props.children}
    </div>
  )
}

export default Layout
