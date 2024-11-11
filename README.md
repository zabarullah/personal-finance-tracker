Personal Finance Tracker
========================

Project Overview
----------------

The **Personal Finance Tracker** application enables users to track their daily expenses with features for category and date range filtering, expense chart visualization, and total spending summaries. Built with React and Bootstrap, the application provides a responsive UI to manage personal finances effectively.

Features
--------

1.  **ExpenseForm** - Adds new expenses with fields for category, amount, and date (With validation).
    
2.  **Filter** - Allows users to filter expenses by category and date range. This updates the Expense List, the Chart and Total Spending.
    
3.  **ExpenseChart** - Displays a bar chart visualizing expenses across different intervals (day, week, month).
    
4.  **TotalSpending** - Shows a summary of expenses over the selected interval in the chart, including a detailed, scrollable list for each interval (day, week, or month).
    
5.  **ExpenseList** - Displays a list of all recorded expenses (if filter is set to default) or filtered expenses with an option to delete each entry. Also includes a total at the bottom of the list.
    

Components Walk-through
----------

### App

The **App** component serves as the main container for all other components, handling:

*   **State Management**: Manages the overall state for expenses, dateRange, and categoryFilter.
    
*   **Local Storage**: Retrieves saved expenses from local storage upon initialization and updates local storage whenever expenses are modified.
    
*   **Expense Filtering**: Filters expenses by category and date range, passing the filtered data to other components as needed.
    

### ExpenseForm

The **ExpenseForm** component allows users to input new expense entries with:

*   **Category**: Select a category for the expense (Food, Transport, Shopping, etc.).
    
*   **Amount**: Enter the expense amount in pounds (£).
    
*   **Date**: Choose a date for the expense using a date picker.
    
*   **Submit Button**: Adds the expense to the tracker and resets the form fields.
    

### Filter

The **Filter** component enables users to refine the displayed expenses by:

*   **Category Filter**: Filter the data by selecting a specific category (Food, Transport, Shopping, etc.).
    
*   **Date Range Filter**: Filter expenses within a specific date range using a date picker with a custom placeholder to indicate range selection.
    
*   **Reset Button**: Clears the filters and resets the displayed data.

Please Note: leaving the Filters with default settings will show all expenses entered for all categories and dates across the app.   

### ExpenseChart

The **ExpenseChart** component provides a visual representation of expenses over selectable intervals, as per the Filters selected:

*   **Interval Selection**: Choose between "day," "week," or "month" to view expenses over different timeframes.
    
*   **Data Visualization**: A bar chart displays the total amount spent per selected interval.
    
*   **Tooltip with Amount**: Hovering over each bar shows the exact amount for that interval, with the currency symbol (£) displayed.
    
*   **X and Y Axis Labels**: The X-axis shows the interval label (e.g., "Day," "Week," or "Month") while the Y-axis shows "Amount (£)" to provide context to users.
    

### TotalSpending

The **TotalSpending** component provides a breakdown of expenses based on the interval selected in the ExpenseChart:

*   **Interval-Based Totals**: A list of total spending amounts for each day, week, or month displayed according to the selected interval.
    
*   **Scrollable List**: The list is scrollable to accommodate longer entries, ensuring visibility for all items over extended periods.
    
*   **Dynamic Labeling**: Adjusts dynamically to reflect the selected interval (e.g., "Total Spending Summary Per Day").
    

Each entry in the list reflects the interval totals from the chart view, showing both the interval label (e.g., a specific date, week, or month) and the corresponding total amount, enabling users to view the chart data in a detailed list format.

### ExpenseList

The **ExpenseList** component displays all expenses in a list format:

*   **Expense Entry**: Each entry shows the category, amount, and date.
    
*   **Delete Button**: Allows users to remove individual expenses.
    
*   **Total Display**: A total of expenses is shown at the bottom for easy reference.
    

Usage
-----

1.  **Adding an Expense**:
    
    *   Use the **ExpenseForm** to add new expenses by selecting a category, entering an amount, and choosing a date.
        
    *   Click "Add Expense" to save the expense.
        
2.  **Viewing and Filtering Expenses**:
    
    *   Use the **Filter** component to filter expenses by category and/or date range
        
    *   If no date range is specified, the application displays all entries.
        
3.  **Chart Visualization**:
    
    *   Select an interval (Day, Week, or Month) to view a summarized bar chart of expenses for that timeframe.
        
    *   Hover over each bar to see the exact amount for each interval.
        
4.  **Viewing Total Spending per Interval**:
    
    *   As you switch intervals (daily, weekly, monthly) in the **ExpenseChart**, the **TotalSpending** list updates to reflect interval-based totals.
        
    *   For example, if you select "Week," the **TotalSpending** list displays each week and its corresponding total expenses, matching the values shown in the chart.
        
5.  **Deleting an Expense**:
    
    *   Each entry in the **ExpenseList** includes a "Delete" button to remove the expense from the tracker.
        

Technical Details
-----------------

*   **Local Storage**: All expense data is saved in the browser's local storage, allowing data persistence between sessions.
    
*   **Responsive Design**: Built with Bootstrap to ensure responsive and mobile-friendly layouts.
    
*   **Data Management**: All expenses are managed in React state and dynamically filtered based on user input.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


