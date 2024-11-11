import React from 'react';

function ExpenseList({ expenses, onDelete }) {
  // Calculate the total amount of all expenses
  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="card p-4 mb-4">
      <h5>Expense List</h5>
      <ul className="list-group overflow-auto" style={{ maxHeight: '300px' }}>
        {expenses.map((expense, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {expense.category} - £{expense.amount} on {new Date(expense.date).toLocaleDateString()}
            <button className="btn btn-danger btn-sm" onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
        {/* Total amount row */}
        <li className="list-group-item d-flex justify-content-between align-items-center font-weight-bold">
          <span>Total:</span>
          <span>£{totalAmount.toFixed(2)}</span>
        </li>
      </ul>
    </div>
  );
}

export default ExpenseList;

