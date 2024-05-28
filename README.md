# Company List
The application allows managing information about companies and their employees through tables. You can add, delete, and edit data, as well as display related employees when selecting companies.

## Stack
React.js - Redux Toolkit - TypeScript - CSS Modules - FSD

## Demo
https://relativelie.github.io/companies-employees/

## Functionality

### Adding a Company/Employee
- Performed through a modal window
- All input fields are required
- An error message will be displayed if attempting to save with empty fields
- When adding an employee, you can only select a company from the already listed companies

### Deleting a Company/Employee
- Initiated by clicking a button and requires confirmation
- Supports bulk deletion by selecting multiple checkboxes

### Editing Companies
- Editing is available directly in the table
- Changes are canceled by pressing the Esc key
- Changes are saved by pressing Enter or clicking outside the editing field
- If the field remains empty after editing, the changes will not be saved

### Displaying Employees
- When selecting a company, all employees associated with it are displayed
- When selecting multiple companies, the list includes employees from all selected companies

### Updating Employee Counter
- The number of employees in the corresponding company is automatically updated when adding or deleting an employee


## Installation and Launch

1. Clone the repository:
   git clone https://github.com/Relativelie/companies-employees.git
2. Go to the project folder and install dependencies:
   cd company-list-app
   npm install
3. Launch the project locally:
   cd company-list-app
   npm run dev
