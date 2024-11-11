import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function ExpenseForm({ onAddExpense }) {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount <= 0 || !category || date > new Date()) {
      alert("Please enter valid expense details.");
      return;
    }
    onAddExpense({ category, amount: parseFloat(amount), date });
    setCategory('');
    setAmount('');
    setDate(new Date());
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 mb-4">
            <h5>Add New Expense</h5>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Shopping">Shopping</option>
            {/* Add more categories here */}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Amount (£)</label>
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <div className="d-flex align-items-center justify-content-between">
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              maxDate={new Date()}
              className="form-control"
              dateFormat= "dd/MM/yyyy"
              />
          <button type="submit" className="btn btn-primary ms-2">Add Expense</button>
          </div>
        </div>
      
    </form>
  );
}

export default ExpenseForm;
