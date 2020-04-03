import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import modules from './modules'

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  container: {
    maxHeight: 600,
    minWidth: 650
  }
})

export default function MainContent ({ data }) {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {modules.map((column) => (
                <TableCell
                  key={column.field} align='center'
                >
                  {column.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(row => (
              <TableRow key={row.id}>
                {modules.map(mod => <TableCell key={row.id + mod.field} align='center'>{row[mod.field]}</TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
