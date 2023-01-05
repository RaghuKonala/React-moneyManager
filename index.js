// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transacDetails, delHistory} = props
  const {id, titleInput, amountInput, type} = transacDetails

  const title = titleInput
    ? titleInput[0].toUpperCase() + titleInput.substring(1)
    : ''
  const amount = amountInput ? parseInt(amountInput) : ''

  const onClickDelete = () => delHistory(id)

  return (
    <li className="each-transaction">
      <p className="text">{title}</p>
      <p className="text">{amount}</p>
      <p className="text">{type}</p>
      <button
        onClick={onClickDelete}
        className="del-button"
        type="button"
        data-testid="delete"
      >
        <img
          className="del-logo"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
