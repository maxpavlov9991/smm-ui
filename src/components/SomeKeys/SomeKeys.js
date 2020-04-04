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
  },
  container: {
    maxHeight: 500,
    overflow: 'auto'
  }
})

export default function SomeKeys () {
  const classes = useStyles()

  return (
    <div>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table size='small'>
            <TableBody>
              {data.map(row => (
                <TableRow key={row.id} hover>
                  <TableCell align='left'>{row.key}</TableCell>
                  <TableCell align='right'>{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  )
}
