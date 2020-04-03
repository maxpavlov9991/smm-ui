import React, { PureComponent, forwardRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import MuiLink from '@material-ui/core/Link'

class Link extends PureComponent {
  render () {
    const { forwardedRef, ...props } = this.props
    return (
      <MuiLink
        component={RouterLink}
        {...props}
        ref={forwardedRef}
      >
        {props.children}
      </MuiLink>
    )
  }
}

export default forwardRef((props, ref) => <Link {...props} forwardedRef={ref} />)
