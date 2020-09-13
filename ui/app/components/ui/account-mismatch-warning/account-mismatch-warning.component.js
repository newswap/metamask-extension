import React from 'react'
import Tooltip from '../tooltip-v2'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { getSelectedAccount } from '../../../selectors'
import InfoIcon from '../icon/info-icon.component'
import { useI18nContext } from '../../../hooks/useI18nContext'
import { isValidNewAddress, newAddress2HexAddress } from '../../../helpers/utils/newchain-util'

export default function AccountMismatchWarning ({ address }) {
  const selectedAccount = useSelector(getSelectedAccount)
  const t = useI18nContext()
  if (isValidNewAddress(address)) {
    address = newAddress2HexAddress(address)
  }
  if (selectedAccount.address === address) {
    return null
  }

  return (
    <Tooltip
      position="bottom"
      html={<p>{t('notCurrentAccount')}</p>}
      wrapperClassName="account-mismatch-warning__tooltip-wrapper"
      containerClassName="account-mismatch-warning__tooltip-container"
    >
      <div className="account-mismatch-warning__tooltip-container-icon"><InfoIcon severity="warning" /></div>
    </Tooltip>
  )
}

AccountMismatchWarning.propTypes = {
  address: PropTypes.string.isRequired,
}
