import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Filter({ categoryFilter, setCategoryFilter, dateRange, setDateRange }) {
  // Function to reset filters
  const resetFilters = () => {
    setCategoryFilter('');
    setDateRange([null, null]);
  };

   // Custom input to show placeholder text for date range
  const CustomDateInput = ({ value, onClick }) => (
    <input
      type="text"
      className="form-control"
      onClick={onClick}
      value={value}
      placeholder="Select a date range" // Placeholder text for date range
      readOnly
    />
  );

  return (
    <div className="card p-4 mb-4">
      <h5>Filter</h5>
      <div className="row align-items-end">
        {/* Category Filter */}
        <div className="col-md-4 mb-3">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Shopping">Shopping</option>
          </select>
        </div>

        {/* Date Range Filter with Reset Button */}
        <div className="col-md-8 mb-3">
          <label className="form-label">Date Range</label>
          <div className="d-flex align-items-center justify-content-between">
            <DatePicker
              selected={dateRange[0]}
              onChange={(dates) => setDateRange(dates)}
              startDate={dateRange[0]}
              endDate={dateRange[1]}
              selectsRange
              className="form-control"
              dateFormat="dd/MM/yyyy"
              customInput={<CustomDateInput />}
            />
            <button
              type="button"
              className="btn btn-primary ms-2"
              onClick={resetFilters}
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;

