import Table from './TransactionHistory.style';

const TransactionHistory = ({ items }) => {
    return (
        <Table className="transaction-history">
  <thead>
    <tr className="table__items">
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(el => {
      return (
        <tr className="table__items" key={el.id}>
           <td>{el.type}</td>
           <td>{el.amount}</td>
           <td>{el.currency}</td>
        </tr>        
      );
      })}    
  </tbody>
        </Table>
    );
}


export default TransactionHistory;