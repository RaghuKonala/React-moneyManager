import {Component} from 'react'
import './index.css'

import {v4 as uniqueId} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactions: [],
    titleInput: '',
    amountInput: '',
    selectedOption: transactionTypeOptions[0].optionId,
  }

  onChangeTitle = event => this.setState({titleInput: event.target.value})

  onChangeAmount = event => this.setState({amountInput: event.target.value})

  onChangeOption = event => this.setState({selectedOption: event.target.value})

  addTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, selectedOption} = this.state
    const getTxnType = transactionTypeOptions.find(
      eachOption => eachOption.optionId === selectedOption,
    )
    const {displayText} = getTxnType
    const newTransaction = {
      id: uniqueId(),
      titleInput,
      amountInput: parseInt(amountInput),
      txnType: displayText,
    }
    this.setState(prevState => ({
      transactions: [...prevState.transactions, newTransaction],
      titleInput: '',
      amountInput: '',
      selectedOption: transactionTypeOptions[0].optionId,
    }))
  }

  getMoneyDetails = () => {
    const {transactions} = this.state
    const temp = {balanceAmount: 0, incomeAmount: 0, expensesAmount: 0}

    transactions.forEach(eachTxn => {
      if (eachTxn.txnType === transactionTypeOptions[0].displayText) {
        temp.incomeAmount += eachTxn.amountInput
      } else {
        temp.expensesAmount += eachTxn.amountInput
      }
    })
    temp.balanceAmount = temp.incomeAmount - temp.expensesAmount
    return temp
  }

  onClickDel = id => {
    this.setState(prevState => ({
      transactions: prevState.transactions.filter(eachTxn => id !== eachTxn.id),
    }))
  }

  renderMoneyDetails = () => {
    const moneyDetails = this.getMoneyDetails()
    return <MoneyDetails moneyDetails={moneyDetails} />
  }

  render() {
    const {transactions, titleInput, amountInput, selectedOption} = this.state
    return (
      <div className="app-container">
        <div className="money-manager-container">
          <div className="user-profile-container">
            <h1 className="username">Hi, Richard</h1>
            <p className="greet-description">
              Welcome back to your{' '}
              <span className="sub-description">Money Manager</span>
            </p>
          </div>
          {this.renderMoneyDetails()}
          <div className="inputs-and-transactions">
            <form onSubmit={this.addTransaction} className="form-container">
              <h1 className="txn-header">Add Transaction</h1>
              <label className="labels" htmlFor="title">
                TITLE
              </label>
              <input
                onChange={this.onChangeTitle}
                value={titleInput}
                className="inputs"
                placeholder="TITLE"
                id="title"
                type="text"
              />
              <label className="labels" htmlFor="amount">
                AMOUNT
              </label>
              <input
                onChange={this.onChangeAmount}
                value={amountInput}
                className="inputs"
                placeholder="AMOUNT"
                id="amount"
                type="text"
              />
              <label className="labels" htmlFor="type">
                TYPE
              </label>
              <select
                onChange={this.onChangeOption}
                value={selectedOption}
                className="inputs"
                id="type"
              >
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <button className="add-button" type="submit">
                Add
              </button>
            </form>
            <div className="history-container">
              <h1 className="txn-header">History</h1>
              <ul className="transactions">
                <li className="transactions-header" key="header">
                  <p className="headers">Title</p>
                  <p className="headers">Amount</p>
                  <p className="headers">Type</p>
                </li>
                {transactions.map(eachTxn => (
                  <TransactionItem
                    txnDetails={eachTxn}
                    delTxn={this.onClickDel}
                    key={eachTxn.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
