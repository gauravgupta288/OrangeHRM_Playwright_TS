🎯 Playwright TypeScript Automation Framework
A robust test automation framework built with:

✅ TypeScript

✅ Playwright Test Runner

✅ Page Object Model (POM)

✅ Design Patterns – Singleton, Factory, Builder, Strategy

✅ SOLID Principles

✅ Parallel Test Execution

✅ HTML Reporter

✅ Cross-browser Testing (Chromium, Firefox, WebKit)

✅ Headless/Headed Execution

✅ Git for version control

📁 Project Structure

playwright-ts-framework/
├── factory/              → Factory Pattern (Page & Browser)
├── pages/                → Page Object Model classes
├── strategies/           → Strategy Pattern for multiple flows
├── tests/                → Test Specs
├── utils/                → Custom utility functions (helpers, data, etc.)
├── playwright.config.ts  → Playwright test config
├── tsconfig.json         → TypeScript config
├── package.json          → Project metadata & scripts
└── README.md


🔧 Tools & Libraries

Tool	                Purpose
TypeScript	            Strongly typed language
Playwright	            Web automation
ts-node     	        Run TS files directly
HTML Report	Built-in    Playwright reporter
Node.js/NPM	            Dependency management

🚀 Getting Started

✅ Prerequisites
Node.js (v16+ recommended)

(Optional) Allure CLI for advanced reporting

VS Code with Playwright Test extension

📦 Install Dependencies
npm install
▶️ Running Tests

Run all tests:

npx playwright test

Run a specific test file:
npx playwright test tests/login.spec.ts

Run in headed mode:
npx playwright test --headed

Run with debug mode:
npx playwright test --debug

Generate and view report:
npx playwright show-report

🧰 Design Patterns Implemented
Singleton – For shared instances like browser