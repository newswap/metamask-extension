import ViewContact from './my-accounts.component'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { accountsWithSendEtherInfoSelector, getCurrentNetworkId } from '../../../../selectors'

const mapStateToProps = (state) => {
  const myAccounts = accountsWithSendEtherInfoSelector(state)
  const network = getCurrentNetworkId(state)
  return {
    myAccounts,
    network,
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps),
)(ViewContact)
