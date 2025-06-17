# Cypress Test Suite

This repository contains an automated test suite built with Cypress for testing various UI components and functionalities.

## Test Structure

The test suite is organized into the following components:

### E2E Tests (`cypress/e2e/`)
- `accordian.cy.js` - Tests for accordion component functionality
- `alerts.cy.js` - Tests for alert handling and interactions
- `autocomplete.cy.js` - Tests for autocomplete functionality
- `cartcount.cy.js` - Tests for shopping cart count functionality
- `datepicker.cy.js` - Tests for date picker component
- `download.cy.js` - Tests for file download functionality
- `droppable.cy.js` - Tests for drag and drop functionality
- `filterbyPrice.cy.js` - Tests for price filtering functionality
- `iframe.cy.js` - Tests for iframe interactions
- `modal.cy.js` - Tests for modal dialog functionality
- `sortable.cy.js` - Tests for sorting functionality
- `tooltip.cy.js` - Tests for tooltip component

## Prerequisites

- Node.js (v22 or higher)
- npm (v10 or higher)

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Running Tests

### Run all tests
```bash
npx cypress run
```

### Run tests in interactive mode
```bash
npx cypress open
```

### Run specific test file
```bash
npx cypress run --spec "cypress/e2e/specific-test.cy.js"
```

## Test Reports

Test reports are generated using Mochawesome reporter and are stored in:
- `cypress/reports/mocha/`

## Configuration

The test suite is configured in `cypress.config.js` with the following key settings:
- Default command timeout: 10000ms
- Page load timeout: 60000ms
- Screenshot capture on test failure
- Video recording disabled
- Mochawesome reporter configuration

## Directory Structure

```
├── cypress/
│   ├── e2e/           # Test files
│   ├── fixtures/      # Test data
│   ├── screenshots/   # Test failure screenshots
│   ├── downloads/     # Downloaded files
│   ├── reports/       # Test reports
│   └── support/       # Support files
├── cypress.config.js  # Cypress configuration
└── package.json       # Project dependencies
```

## Best Practices

1. Each test file focuses on a specific component or functionality
2. Tests are independent and can be run in isolation
3. Screenshots are captured on test failures for debugging
4. Test reports are generated for analysis

## Contributing

1. Create a new branch for your changes
2. Write tests for new functionality
3. Ensure all tests pass
4. Submit a pull request

## License

This project is licensed under the MIT License. 