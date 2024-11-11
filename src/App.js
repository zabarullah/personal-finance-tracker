import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseChart from './components/ExpenseChart';
import Filter from './components/Filter.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [categoryFilter, setCategoryFilter] = useState(''); 
  // Retrieval of saved Expenses from the local storage if it exists or return Empty array
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('finance-tracker');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  // updating of expenses to local storage if the state of expenses changes
  useEffect(() => {
    localStorage.setItem('finance-tracker', JSON.stringify(expenses));
  }, [expenses]);

  // functions for adding and deleting an expense
  const addExpense = (expense) => setExpenses([...expenses, expense]);
  const deleteExpense = (index) =>
    setExpenses(expenses.filter((_, i) => i !== index));

  // Filtered expenses based on category and date range
  const filteredExpenses = expenses.filter((expense) => {
    // Filter by category
    if (categoryFilter && expense.category !== categoryFilter) {
      return false;
    }

    // Filter by date range
    if (dateRange[0] && dateRange[1]) {
      const expenseDate = new Date(expense.date);
      return expenseDate >= dateRange[0] && expenseDate <= dateRange[1];
    }

    return true;
  });

  return (
    <div className="container">
      <h1>Personal Finance Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <Filter 
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        dateRange={dateRange}
        setDateRange={setDateRange}
      />
      <ExpenseChart expenses={filteredExpenses} /> {/* Use filtered expenses */}
      <ExpenseList expenses={filteredExpenses} onDelete={deleteExpense} />

    </div>
  );
}

export default App;
