# Playwright E2E Tests for TodoMVC (Angular)

Automated E2E tests for the [TodoMVC Angular example](https://todomvc.com/examples/angular/dist/browser/#/all) using Playwright and TypeScript.

## Prerequisites

*   Node.js (LTS recommended)
*   npm or Yarn
*   Git

## Setup

1.  **Clone the repository:**
    ```bash
    git clone <YOUR_GIT_REPOSITORY_URL>
    cd <YOUR_PROJECT_DIRECTORY_NAME>
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or: yarn install
    ```
3.  **Install Playwright browsers:**
    ```bash
    npx playwright install
    ```

## Running Tests

*   **Run all tests (headless):**
    ```bash
    npx playwright test
    ```
*   **Run tests with browser visible:**
    ```bash
    npx playwright test --headed
    ```
*   **View the HTML report:**
    ```bash
    npx playwright show-report
    ```

---
*Remember to replace `<YOUR_GIT_REPOSITORY_URL>` and `<YOUR_PROJECT_DIRECTORY_NAME>`.*
