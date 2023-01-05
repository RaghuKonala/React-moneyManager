// Write your code here
import './index.css'

const TransactionItem = props => {
  const {txnDetails, delTxn} = props
  const {id, titleInput, amountInput, txnType} = txnDetails

  const title = titleInput
    ? titleInput[0].toUpperCase() + titleInput.substring(1)
    : ''
  const amount = amountInput ? parseInt(amountInput) : ' '

  const onClickDelete = () => delTxn(id)

  return (
    <li className="each-txn">
      <p className="txn-text">{title}</p>
      <p className="txn-text">Rs {amount}</p>
      <p className="txn-text">{txnType}</p>
      <button
        onClick={onClickDelete}
        className="del-button"
        type="button"
        data-testid="delete"
      >
        <img
          className="del-icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
