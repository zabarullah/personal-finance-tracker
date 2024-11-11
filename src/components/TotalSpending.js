import React from 'react';

function TotalSpending({ data = [], interval = "day" }) {
  return (
    <div className="card p-4 mb-4">
      <h5>Total Spending Summary Per {interval.charAt(0).toUpperCase() + interval.slice(1)}</h5>
      
      {/* Scrollable list for interval-based spending */}
      <ul className="list-group overflow-auto" style={{ maxHeight: '200px' }}>
        {data.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{item.date}</span>
            <span>£{item.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TotalSpending;


