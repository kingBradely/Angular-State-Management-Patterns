# Angular State Management Patterns

A comprehensive demonstration of state management patterns in Angular 18.1, comparing RxJS Observables and NgRx Signals through a practical box selection feature implementation. This project serves as a detailed guide for developers looking to understand and choose between different state management approaches in modern Angular applications.

## Overview

This repository provides a side-by-side comparison of two popular state management approaches in Angular:

### RxJS Observables
- Reactive state management using RxJS's powerful streaming capabilities
- Event-driven architecture with Observable streams
- Built-in operators for complex state transformations
- Ideal for handling async operations and event-based state updates

### NgRx Signals
- Angular's new reactive primitive for fine-grained reactivity
- Lightweight and performant state management
- Simplified syntax with computed values
- Perfect for managing UI state with less boilerplate

## Key Features

- Interactive box selection implementation using both approaches
- Performance comparison between RxJS and Signals
- Clean architecture and best practices for each pattern
- Comprehensive documentation and code examples
- TypeScript type safety and modern Angular practices

## Project Overview

The application implements a box selection feature using two different state management approaches:
1. RxJS Observables - Traditional reactive programming approach
2. NgRx Signals - New state management primitive in Angular

## Development Environment Setup

### Prerequisites

1. **Node.js Installation**
   - Download Node.js LTS version from [official website](https://nodejs.org/)
   - Run the installer and follow the installation wizard
   - Verify installation by opening a terminal and running:
     ```bash
     node --version
     npm --version
     ```

2. **Angular CLI Installation**
   - Open a terminal and run:
     ```bash
     npm install -g @angular/cli@18.1.3
     ```
   - Verify installation:
     ```bash
     ng version
     ```

3. **Development Tools**
   - Install a code editor (VS Code recommended)
   - Install Git for version control
   - Configure Git with your credentials:
     ```bash
     git config --global user.name "Your Name"
     git config --global user.email "your.email@example.com"
     ```

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/kingBradely/Angular-State-Management-Patterns.git
   cd Angular-State-Management-Patterns
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   ng serve
   ```
   The application will be available at `http://localhost:4200/`

## Project Structure

- `src/app/models/` - Contains shared interfaces and types
- `src/app/services/` - Contains RxJS-based services
- `src/app/store/` - Contains NgRx Signal store implementations
- `src/app/options-component-rxjs/` - RxJS implementation components
- `src/app/options-component-signals/` - Signals implementation components

## Technical Stack

- Angular 18.1.0
- RxJS 7.8.0
- @ngrx/signals 18.0.2
- @ngrx/store 18.0.2
- TypeScript 5.5.2



### Development Workflow

1. **Development server**
   Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

2. **Code scaffolding**
   Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

3. **Build**
   Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

4. **Running tests**
   - Unit Tests: `ng test` - Executes unit tests via Karma
   - E2E Tests: `ng e2e` - Executes end-to-end tests (requires additional e2e testing package)

## State Management

### RxJS Implementation

The RxJS implementation uses BehaviorSubjects to manage the state:
- `dataSubject`: Manages the array of option boxes
- `currentTabButtonSubject`: Manages the current tab position

State persistence is handled through localStorage for data persistence across sessions.

### Signals Implementation

The Signals implementation uses NgRx Signals:
- Computed signals for derived state
- Signal store for centralized state management
- Local storage integration for state persistence

## Build and Deployment

1. Production build:
   ```bash
   ng build --configuration production
   ```
2. The build artifacts will be stored in the `dist/` directory
3. Deploy the contents of the `dist/` directory to your hosting provider

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## Contributing

We welcome contributions to improve this project! Here's how you can help:

### Contribution Guidelines

1. **Fork & Create Branch**
   - Fork the repository
   - Create a feature branch: `git checkout -b feature/your-feature-name`

2. **Code Style**
   - Follow Angular style guide
   - Use meaningful variable and function names
   - Add comments for complex logic
   - Maintain consistent indentation

3. **Commit Messages**
   - Use conventional commits format:
     - feat: new feature
     - fix: bug fix
     - docs: documentation changes
     - style: formatting, missing semicolons, etc
     - refactor: code refactoring
     - test: adding tests
     - chore: maintenance tasks

4. **Testing**
   - Add unit tests for new features
   - Ensure all tests pass: `ng test`
   - Maintain or improve code coverage

5. **Pull Request Process**
   - Update documentation if needed
   - Link related issues in PR description
   - Request review from maintainers
   - Address review comments promptly