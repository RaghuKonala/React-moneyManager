// Write your code here
import './index.css'

const moneyDetailsList = {
  balanceUrl:
    'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png',

  incomeUrl:
    'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png',

  expensesUrl:
    'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png',
}

const MoneyDetails = props => {
  const {balanceUrl, incomeUrl, expensesUrl} = moneyDetailsList
  const {moneyDetails} = props
  const {balanceAmount, incomeAmount, expensesAmount} = moneyDetails
  return (
    <div className="money-details-container">
      <div className="detail-container balance">
        <img className="icon" alt="balance" src={balanceUrl} />
        <div>
          <p className="detail-title">Your Balance</p>
          <p data-testid="balanceAmount" className="detail-amount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="detail-container income">
        <img className="icon" alt="income" src={incomeUrl} />
        <div>
          <p className="detail-title">Your Income</p>
          <p data-testid="incomeAmount" className="detail-amount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="detail-container expenses">
        <img className="icon" alt="expenses" src={expensesUrl} />
        <div>
          <p className="detail-title">Your Expenses</p>
          <p data-testid="expensesAmount" className="detail-amount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
