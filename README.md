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

## Environment Setup

### Prerequisites

- Node.js (LTS version)
- npm (comes with Node.js)
- Angular CLI version 18.1.3

### Installation Steps

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

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

## Development Workflow

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running tests

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
