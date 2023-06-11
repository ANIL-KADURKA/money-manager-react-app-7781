// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {income, expenses, balance} = props

  return (
    <ul className="money-details">
      <div className="card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="image-icon"
          alt="balance"
        />

        <div>
          <p className="d-para">Your Balance</p>
          <p className="d-amount">Rs {balance}</p>
        </div>
      </div>
      <div className="card2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="image-icon"
          alt="income"
        />
        <div>
          <p className="d-para">Your income</p>
          <p className="d-amount">Rs {income}</p>
        </div>
      </div>
      <div className="card3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="image-icon"
          alt="expenses"
        />
        <div>
          <p className="d-para">Your Expenses</p>
          <p className="d-amount">Rs {expenses}</p>
        </div>
      </div>
    </ul>
  )
}

export default MoneyDetails
