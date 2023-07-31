# DirectID Exercise - ReactJS Project

A user-friendly page to showcase a list of bank account transactions with sorting functionality, developed using ReactJS and Tailwind CSS.

## Table of Contents
- [Overview](#overview)
- [Design Decisions](#design-decisions)
- [Best Practices](#best-practices)
- [External Libraries](#external-libraries)
- [Improvements and Enhancements](#improvements-and-enhancements)
- [Setup and Usage](#setup-and-usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

The User Transactions Page is a ReactJS application that displays a list of bank account transactions for a customer persona named "Apollo Carter." The transactions are fetched from a mock API response and presented in a table format, including transaction date, category, debit, credit, and balance details. Users can also sort transactions based on date and category.

## Design Decisions

### Component Architecture:
- The project follows a component-based architecture, breaking down the user transactions page into smaller, reusable components.
- Components are designed using Tailwind CSS classes to style and layout the elements effectively.

### Data Flow:

- Data is fetched from the mock API in the `fetchTransactions` function within `api.ts`.
- The top-level component `App` manages the state for transactions, balance, and identifiers using React hooks.
- Transaction data is passed down to the `TransactionsTable` component via props.

### Responsive Design:

- Tailwind CSS utilities are used to create a responsive layout that adjusts well on different screen sizes, ensuring a mobile-friendly experience.

### Sorting Functionality:

- Sorting functionality is implemented in the `TransactionsTable` component to allow users to sort transactions based on date and category.
- Tailwind CSS classes are used to style the sorting indicators and table headers.

### Pagination Approach:

- The `PaginationComponent` handles pagination for the `TransactionsTable`, displaying a fixed number of transactions per page.
- Tailwind CSS classes are utilized to style the pagination controls for a consistent look and feel.

### Unit Test Coverage

The primary file that requires unit testing is `TransactionsTable.tsx`. This file houses the core logic for managing the user transactions table, including sorting, pagination, and data presentation. Writing comprehensive unit tests for this component is essential to ensure its correctness and reliability in handling user transactions data.

## Best Practices

### Coding Standards:

- The project adheres to coding standards for TypeScript, React, and Tailwind CSS.
- Proper indentation, meaningful class names, and consistent naming conventions are followed throughout the codebase.

### State Management:

- React hooks are used for state management, maintaining a concise and maintainable codebase.
- State is managed at the appropriate level of the component tree to minimize unnecessary re-renders.

### Code Organization:

- The codebase is organized into separate directories for components, services, and types, following a modular structure.
- Tailwind CSS classes are applied directly to components' JSX, making it easy to manage styles alongside the components.

### Error Handling:

- Error handling is implemented in the `fetchData` function in `App.tsx` using try-catch blocks to handle potential API fetch errors.
- Meaningful error messages are provided to users if any errors occur during data fetching.

### Modular Components:

- Components are designed to be reusable and easily extensible, enabling smooth integration into other parts of the application.
- Tailwind CSS utility classes allow for quick styling changes and flexibility in component reusability.

## External Libraries

### Tailwind CSS:
- The project utilizes Tailwind CSS as the primary CSS framework for styling the user interface.
- Tailwind's utility-first approach is used to design and layout components efficiently.

### rc-pagination:
- The rc-pagination module is used to handle pagination functionality in the TransactionsTable component.
- It provides pagination controls for the table, allowing users to navigate through multiple pages of transactions.
- Custom rendering of pagination arrows is implemented using the itemRender prop.
- The module is lightweight and provides smooth pagination for a seamless user experience.

## Improvements and Enhancements

### UI/UX Considerations:
- The UI design is enhanced by leveraging Tailwind CSS utility classes for consistent styling, colors, and spacing throughout the application.
- Typography choices are made using Tailwind CSS text styles to ensure readability and visual appeal.

### Testing Strategy:
- The project includes unit tests for critical components and business logic using testing libraries like Jest and React Testing Library.
- Additional test cases could be added to further improve test coverage, ensuring a robust and bug-free application.

## Setup and Usage

To run the project locally, follow these steps:
1. Clone the repository:
```
git clone https://github.com/VladanVaskovic/directid-task.git
```
2. Install dependencies:
```
cd directid-task
npm install
```
3. Start the development server:
```
npm start
```
The application will be accessible at `http://localhost:3000` in your web browser.

## Contributing

Contributions to this project are welcome. If you find any issues or want to add new features, feel free to open a pull request or raise an issue in the repository.
