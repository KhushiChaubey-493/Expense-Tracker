# Expense Tracker

A responsive **Expense Tracker** web application built with **HTML, CSS, and JavaScript**. The application allows users to record earnings and expenses, monitor their current balance, and manage transaction records directly in the browser.

Transaction data is stored using the browser's **Local Storage**, allowing records to remain available after refreshing or reopening the application.

## Features

* Add earning transactions.
* Add expense transactions.
* Display the current balance dynamically.
* Display transaction history.
* Identify transactions as credit/earning or debit/expense.
* Edit existing transactions.
* Delete transactions.
* Persist transaction data using Local Storage.
* Dynamically update earning and expense totals.
* Responsive user interface.
* Client-side transaction management without a backend or database.

## Technologies Used

* **HTML5** — Structure and form elements
* **CSS3** — Layout, styling, and responsive design
* **JavaScript (ES6+)** — Application logic, DOM manipulation, event handling, and transaction management
* **Local Storage API** — Persistent browser-side data storage

## Project Structure

```text
Expense-Tracker/
│
├── images/
│   ├── pen.svg
│   └── trash.svg
│
├── expense-tracker.jpeg
├── index.html
├── index.js
├── style.css
└── README.md
```

## How It Works

The application follows a simple transaction-management workflow.

### 1. Add a Transaction

The user enters:

* Transaction description
* Transaction amount

The application provides separate controls for recording an **earning** or an **expense**.

### 2. Calculate the Balance

The application maintains the user's financial balance based on the recorded transactions.

Conceptually:

```text
Balance = Total Earnings - Total Expenses
```

Whenever a transaction is added, edited, or deleted, the displayed financial information is updated.

### 3. Display Transactions

Each transaction is rendered dynamically in the transaction list.

A transaction contains information such as:

```text
Description
Amount
Transaction Type
Edit
Delete
```

The interface visually distinguishes earning and expense transactions.

### 4. Edit Transactions

Existing transactions can be modified using the edit control provided with each transaction.

This allows users to correct descriptions or amounts without having to recreate the transaction.

### 5. Delete Transactions

Users can remove unwanted transactions using the delete control.

After deletion, the application's displayed financial totals are recalculated.

## Local Storage

The application uses the browser's **Local Storage API** to persist transaction information.

This means transaction data can remain available when the user:

* Refreshes the page.
* Closes and reopens the browser.
* Returns to the application later using the same browser storage.

No server-side database is required for the current implementation.

## User Interface

The application includes:

* **Current Balance** section
* **Transactions** section
* Transaction history
* **Add Transactions** form
* Earning control
* Expense control
* Edit and delete actions

The HTML structure defines the main application sections, while JavaScript dynamically updates the transaction data and financial values.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/KhushiChaubey-493/Expense-Tracker.git
```

### 2. Navigate to the Project

```bash
cd Expense-Tracker
```

### 3. Run the Application

Open:

```text
index.html
```

in a modern web browser.

No:

* Backend server
* Database
* Node.js installation
* Package manager
* External framework

is required for the current implementation.

## Key JavaScript Concepts Practiced

This project demonstrates practical JavaScript concepts including:

* DOM manipulation
* Event handling
* Form handling
* Functions
* Arrays and objects
* Conditional statements
* Array methods
* Dynamic HTML generation
* Browser Local Storage
* State management
* CRUD operations
* Dynamic calculations
* Updating the user interface based on application state

## CRUD Operations

The project provides the core CRUD workflow for browser-based transaction management:

| Operation  | Implementation               |
| ---------- | ---------------------------- |
| **Create** | Add a new earning or expense |
| **Read**   | Display saved transactions   |
| **Update** | Edit an existing transaction |
| **Delete** | Remove a transaction         |

This makes the project a useful practical example of implementing CRUD-style functionality using vanilla JavaScript and browser storage.

## Data Persistence

The application stores transaction information in the browser rather than sending it to a backend server.

```text
User Action
    ↓
JavaScript
    ↓
Transaction State
    ↓
Local Storage
    ↓
Dynamic UI Update
```

This architecture keeps the application lightweight and completely client-side.

## Screenshot

A project screenshot is included in the repository:

```text
expense-tracker.jpeg
```

You can use it to provide a visual preview of the application on the GitHub README.

## Learning Objectives

This project was created to strengthen practical frontend development skills, particularly:

* Building forms with HTML
* Styling responsive interfaces with CSS
* Managing application state with JavaScript
* Performing CRUD operations
* Working with browser Local Storage
* Dynamically rendering data
* Handling user events
* Calculating and displaying derived values
* Structuring a small frontend application

## Future Improvements

Possible improvements for future versions include:

* Add transaction dates.
* Add transaction categories.
* Add search and filtering.
* Add monthly and yearly summaries.
* Add income/expense charts.
* Add category-based spending analysis.
* Add a confirmation dialog before deletion.
* Add form validation and clearer error messages.
* Add export/import functionality.
* Add CSV or PDF report generation.
* Add dark/light theme support.
* Add user authentication.
* Replace Local Storage with a PHP/MySQL backend for multi-device persistence.

## Project Status

**Completed — Frontend Practice Project**

The current version focuses on client-side transaction management using vanilla JavaScript and browser Local Storage.

## Author

**Khushi Chaubey**

GitHub: https://github.com/KhushiChaubey-493

Portfolio: https://khushichaubey-493.github.io/Personal-Portfolio-Website/

## License

This project was created for learning and educational purposes.
