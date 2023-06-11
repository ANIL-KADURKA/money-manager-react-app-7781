// Write your code here
import './index.css'

const TransactionItem = props => {
  const {TransactionEachItem} = props
  console.log(TransactionEachItem)
  const {title, Amount} = TransactionEachItem

  return (
    <li>
      <div className="li-fix">
        <p className="li-para">{title}</p>
        <p className="li-para">{title}</p>
        <p className="li-para">{Amount}</p>
      </div>
      <hr className="horizontal" />
    </li>
  )
}

export default TransactionItem
