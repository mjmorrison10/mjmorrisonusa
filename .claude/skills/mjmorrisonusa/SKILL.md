```markdown
# mjmorrisonusa Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill provides guidance on the coding conventions, commit patterns, and testing approaches used in the `mjmorrisonusa` JavaScript codebase. It is designed to help contributors quickly understand the project's structure and best practices, ensuring consistency and maintainability across the repository.

## Coding Conventions

### File Naming
- Use **PascalCase** for file names.
  - **Example:**  
    ```
    MyComponent.js
    UtilityFunctions.js
    ```

### Import Style
- Use **relative imports** for modules within the project.
  - **Example:**  
    ```javascript
    import { helperFunction } from './HelperFunctions';
    ```

### Export Style
- Use **named exports** for all modules.
  - **Example:**  
    ```javascript
    // In HelperFunctions.js
    export function helperFunction() { ... }
    export const CONSTANT = 42;
    ```

    ```javascript
    // In another file
    import { helperFunction, CONSTANT } from './HelperFunctions';
    ```

### Commit Patterns
- Follow **conventional commits** with the `fix` prefix for bug fixes.
- Commit messages are concise, averaging 64 characters.
  - **Example:**  
    ```
    fix: resolve issue with data parsing in UserComponent
    ```

## Workflows

### Fix a Bug
**Trigger:** When a bug is identified and needs to be resolved  
**Command:** `/fix-bug`

1. Create a new branch for the fix.
2. Locate the problematic code and implement the fix.
3. Ensure the file uses PascalCase naming and relative imports/exports.
4. Write or update a corresponding test file (`*.test.*`) if applicable.
5. Commit changes using the conventional commit format with the `fix` prefix.
6. Open a pull request for review.

### Add a New Module
**Trigger:** When adding a new utility or component  
**Command:** `/add-module`

1. Create a new file using PascalCase (e.g., `NewModule.js`).
2. Implement the module using named exports.
3. Use relative imports for any dependencies.
4. Add or update test files as needed.
5. Commit changes with a descriptive message.
6. Submit for review.

## Testing Patterns

- Test files follow the `*.test.*` naming pattern (e.g., `MyComponent.test.js`).
- The specific testing framework is not detected; follow existing patterns in the codebase.
- Place tests alongside or near the modules they cover.

  **Example:**
  ```
  MyComponent.js
  MyComponent.test.js
  ```

## Commands
| Command      | Purpose                                      |
|--------------|----------------------------------------------|
| /fix-bug     | Start the bug fix workflow                   |
| /add-module  | Start the process for adding a new module    |
```
