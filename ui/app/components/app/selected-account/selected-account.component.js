import React, { Component } from 'react'
import PropTypes from 'prop-types'
import copyToClipboard from 'copy-to-clipboard'
import { shortenAddress, checksumAddress } from '../../../helpers/utils/util'

import Tooltip from '../../ui/tooltip-v2.js'
import { hexAddress2NewAddress } from '../../../helpers/utils/newchain-util'

class SelectedAccount extends Component {
  state = {
    copied: false,
  }

  static contextTypes = {
    t: PropTypes.func,
  }

  static propTypes = {
    selectedIdentity: PropTypes.object.isRequired,
    currentNetworkId: PropTypes.string,
  }

  render () {
    const { t } = this.context
    const { selectedIdentity, currentNetworkId } = this.props
    // const checksummedAddress = checksumAddress(selectedIdentity.address)
    const newAddress = hexAddress2NewAddress(selectedIdentity.address, currentNetworkId)

    return (
      <div className="selected-account">
        <Tooltip
          wrapperClassName="selected-account__tooltip-wrapper"
          position="bottom"
          title={this.state.copied ? t('copiedExclamation') : t('copyToClipboard')}
        >
          <div
            className="selected-account__clickable"
            onClick={() => {
              this.setState({ copied: true })
              setTimeout(() => this.setState({ copied: false }), 3000)
              copyToClipboard(newAddress)
            }}
          >
            <div className="selected-account__name">
              { selectedIdentity.name }
            </div>
            <div className="selected-account__address">
              { shortenAddress(newAddress) }
            </div>
          </div>
        </Tooltip>
      </div>
    )
  }
}

export default SelectedAccount
