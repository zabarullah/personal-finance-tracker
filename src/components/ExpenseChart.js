import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import TotalSpending from './TotalSpending';

function ExpenseChart({ expenses }) {
  const [interval, setInterval] = useState('day');

  // Function to group and aggregate expenses based on the selected interval
  const aggregateExpenses = (interval) => {
    const aggregatedData = {};

    expenses.forEach((expense) => {
      const date = new Date(expense.date);
      let key;

      // Set the grouping key based on interval
      if (interval === 'day') {
        key = date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' });
      } else if (interval === 'week') {
        const weekStart = new Date(date);
        weekStart.setDate(date.getDate() - date.getDay()); // Start of the week (Sunday)
        key = `Wk ${weekStart.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' })}`;
      } else if (interval === 'month') {
        key = date.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
      }

      // Aggregate amounts for each key
      if (aggregatedData[key]) {
        aggregatedData[key] += expense.amount;
      } else {
        aggregatedData[key] = expense.amount;
      }
    });

    // Convert aggregated data object to an array for the chart and for TotalSpending
    let data = Object.keys(aggregatedData).map((key) => ({
      date: key,
      amount: aggregatedData[key],
    }));

    // Sort data by date for the day interval
    if (interval === 'day') {
      data = data.sort((a, b) => {
        const dateA = new Date(a.date.split('/').reverse().join('/')); // Convert DD/MM to YYYY/MM/DD for sorting
        const dateB = new Date(b.date.split('/').reverse().join('/'));
        return dateA - dateB;
      });
    }

    return data;
  };

  const data = aggregateExpenses(interval);

  return (
    <div className="card p-4 mb-4">
      <h5>Expense Chart</h5>

      {/* Dropdown to select the interval */}
      <div className="mb-3">
        <label htmlFor="interval-select" className="form-label">Select Interval:</label>
        <select
          id="interval-select"
          className="form-select"
          value={interval}
          onChange={(e) => setInterval(e.target.value)}
        >
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
        </select>
      </div>

      {/* Pass interval-based data to TotalSpending for list display */}
      <TotalSpending data={data} interval={interval} />

      {/* Bar chart for expenses */}
      <div style={{ width: '100%', height: 350 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="date" label={{ value: 'Interval', position: 'bottom', offset: -6 }} />
            <YAxis label={{ value: 'Amount (£)', angle: -90, position: 'insideLeft', textAnchor: 'middle' }} />
            <Tooltip formatter={(value) => [`£${value.toFixed(2)}`, "Amount"]}/>
            <CartesianGrid stroke="#f5f5f5"/>
            <Bar dataKey="amount" fill="#ff0000" /> 
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ExpenseChart;

