import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'

import data from './keys'

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  container: {
    maxHeight: 150,
    width: 500
  }
})

export default function SomeKeys () {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table>
          <TableBody>
            {data.map(row => (
              <TableRow key={row.id}>
                <TableCell align='left'>{row.key}</TableCell>
                <TableCell align='right'>{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
