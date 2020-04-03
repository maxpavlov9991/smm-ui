import Main from './page'

import { connect } from 'react-redux'

import { mainActions } from '../../store/actions'
import { mainSelectors } from '../../store/selectors'

const mapStateToProps = (state) => {
  return {
    status: mainSelectors.getStatus(state),
    data: mainSelectors.getData(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(mainActions.loadData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
