import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Link from '../Link'
import navRoutes from './routes.json'

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  toolbarSpacing: theme.mixins.toolbar,
  drawer: {
    width: '100%',
    flexShrink: 0
  },
  drawerPaper: {
    width: '100%',
    background: theme.palette.secondary.light
  },
  version: {
    flexGrow: 1
  },
  item: {
    paddingRight: theme.spacing(4)
  }
}))

const Header = () => {
  const classes = useStyles()

  return (
    <>
      <AppBar position='fixed'>
        <Toolbar className={classes.toolbar}>
          {navRoutes.map((route, index) => (
            <Link
              key={route.name}
              to={route.href}
              color='inherit'
              className={classes.item}
            >
              <Typography variant='h6' noWrap>
                {route.label}
              </Typography>
            </Link>
          ))}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
