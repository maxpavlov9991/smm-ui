import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Link from '../Link'
import footer from './footer'

const useStyles = makeStyles(theme => ({
  toolbar: {
    height: '150px',
    backgroundColor: theme.palette.primary.main,
    '& a': {
      transition: 'color 0.2s',
      color: 'white'
    },
    '& a:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'none'
    }
  },
  name: {
    color: 'white',
    fontWeight: 'bolder',
    textTransform: 'uppercase'
  }
}))

function Footer () {
  const classes = useStyles()

  return (
    <Toolbar className={classes.toolbar}>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
      >
        {footer.map(elem =>
          <Grid
            item
            container
            direction='column'
            justify='center'
            alignItems='center'
            key={elem.name}
            xs={3}
          >
            <Grid item className={classes.name}>
              <Typography variant='h6' noWrap>
                {elem.name}
              </Typography>
            </Grid>
            {elem.links.map(link =>
              <Grid item key={link.name}>
                <Link to={link.url}>
                  <Typography variant='body2' noWrap>
                    {link.name}
                  </Typography>
                </Link>
              </Grid>
            )}
          </Grid>
        )}

      </Grid>
    </Toolbar>
  )
}

export default Footer
