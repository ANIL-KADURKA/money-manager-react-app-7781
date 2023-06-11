import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails'

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
    income: 0,
    expenses: 0,
    balance: 0,
    Amount: '',
    title: '',
    Type: '',
    ArrayOfMine: [
      {
        id: uuidv4(),
        Type: 'INCOME',
        title: 'Salary',
        Amount: '500',
      },
    ],
  }

  onClickText = event => {
    this.setState({
      title: event.target.value,
    })
  }

  onClickAmount = event => {
    this.setState({
      Amount: event.target.value,
    })
  }

  onClickType = event => {
    this.setState({
      Type: event.target.value,
    })
  }

  onClickAdd = event => {
    event.preventDefault()
    const {Type, Amount} = this.state
    if (Type === 'INCOME') {
      this.setState(prevState => ({
        income: prevState.income + parseInt(Amount),
      }))
    } else {
      this.setState(prevState => ({
        expenses: prevState.expenses + parseInt(Amount),
      }))
    }
  }

  render() {
    const {income, expenses, balance, Amount, title, Type} = this.state

    const {ArrayOfMine} = this.state

    console.log(ArrayOfMine)

    return (
      <div className="money-app">
        <div className="head-container">
          <h1 className="m-head">Hi,Richard</h1>
          <p className="m-para">
            Welcome back to your
            <span className="span-element">Money Manager</span>
          </p>
        </div>
        <MoneyDetails income={income} expenses={expenses} balance={balance} />
        <div className="transaction-container">
          <div className="Form-element">
            <h1 className="f-head">Add Transaction</h1>
            <form>
              <div className="hello-world">
                <label htmlFor="name">Title</label>
                <input
                  type="text"
                  className="form-control input-element"
                  id="name"
                  value={title}
                  onChange={this.onClickText}
                />
              </div>
              <div className="hello-world">
                <label htmlFor="Amount">Amount</label>
                <input
                  type="Amount"
                  className="form-control input-element"
                  id="Amount"
                  value={Amount}
                  onChange={this.onClickAmount}
                />
              </div>
              <div className="hello-world2">
                <label htmlFor="Type">Type</label>
                <select
                  className="capital-select"
                  onChange={this.onClickType}
                  value={Type}
                  id="Type"
                >
                  {transactionTypeOptions.map(eachManager => (
                    <option
                      key={eachManager.optionId}
                      value={eachManager.optionId}
                      className="option"
                    >
                      {eachManager.displayText}
                    </option>
                  ))}
                </select>
              </div>
            </form>
            <div className="hello-world3">
              <button
                className="button"
                type="submit"
                onClick={this.onClickAdd}
              >
                Add
              </button>
            </div>
          </div>
          <div className="history-container">
            <h1 className="f-head">History</h1>
            <div className="h-element">
              <p className="h-para">Title</p>
              <p className="h-para">Amount</p>
              <p className="h-para">Type</p>
            </div>
            <hr className="horizontal" />
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
