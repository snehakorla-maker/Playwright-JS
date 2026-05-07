# 📘 Playwright Demo Guide

---

## 📑 Table of Contents

1. [Setup & Installation](#️-setup--installation)
   - [Install Playwright](#install-playwright)
   - [Verify Installation](#verify-installation)
   - [Initial Setup](#initial-setup)
   - [Launch Code Generator](#launch-code-generator)

2. [Running Tests](#️-running-tests)

3. [Writing Tests](#️-writing-tests)

4. [Test Generator (Codegen)](#-test-generator-codegen)

5. [Trace Viewer](#-trace-viewer)

6. [Selectors & Locators](#-selectors--locators)

7. [Sample Tests](#-sample-tests)

8. [Assertions](#-assertions)

9. [Slow Motion & Video Recording](#-slow-motion--video-recording)

10. [Hooks & Grouping](#-hooks--grouping)

11. [Annotations & Tags](#️-annotations)

12. [Page Object Model (POM)](#-page-object-model-pom)

13. [API Testing](#-api-testing)

14. [Summary](#-summary)

---

## 🛠️ Setup & Installation

* Install Node.js
* Install VS Code
* Create a folder: `playwright-test`
* Open the folder in VS Code

### Install Playwright

```bash
npm i -D playwright
npm init playwright@latest
```

### Verify Installation

```bash
npm playwright -v
npx playwright --help
```

### Initial Setup

* Create file: `hello-playwright.js`
* Install browsers:

```bash
npx playwright install
```

### Launch Code Generator

```bash
npx playwright codegen wikipedia.org
```

* Opens:

  * Browser window
  * Playwright Inspector
* Actions performed are auto-generated as code

---

## ▶️ Running Tests

```bash
npx playwright test                         # Run all tests (headless)
npx playwright show-report                  # View HTML report
npx playwright test --workers 3             # Parallel execution
npx playwright test one.spec.js             # Run specific file
npx playwright test one.spec.js two.spec.js # Run multiple files
npx playwright test one two                 # Match file names
npx playwright test -g "check title"        # Run by title
npx playwright test --project=chromium      # Specific browser
npx playwright test --headed                # Headed mode
npx playwright test --debug                 # Debug all
npx playwright test example.spec.js --debug
npx playwright test example.spec.js:21 --debug
```

---

## ✍️ Writing Tests

### Step 1: Create test file

### Step 2: Import module

```javascript
import { test, expect } from '@playwright/test'
```

### Step 3: Create Test

```javascript
test('My first test', async ({ page }) => {
    await page.goto('https://google.com')
    await expect(page).toHaveTitle('Google')
})
```

* `async` → returns Promise
* `await` → waits for execution

---

## 🎥 Test Generator (Codegen)

```bash
npx playwright codegen
npx playwright codegen google.com
```

### Options

```bash
npx playwright codegen --browser firefox
npx playwright codegen --target javascript -o record_example.js
npx playwright codegen --viewport-size=800,600
npx playwright codegen --device="iPhone 11"
npx playwright codegen --color-scheme=dark
npx playwright codegen --help
```

---

## 📊 Trace Viewer

### What is it?

GUI tool to analyze test execution with:

* Snapshots
* Timeline
* Debug info

### Setup

```javascript
trace: 'on-first-retry'
```

### View Trace

```bash
npx playwright show-trace trace.zip
```

### Trace Options

* `on-first-retry`
* `off`
* `on`
* `retain-on-failure`

### Programmatic Tracing

```javascript
await context.tracing.start({ snapshots: true, screenshots: true })
// test code
await context.tracing.stop({ path: 'test-trace.zip' })
```

---

## 🎯 Selectors & Locators

### Examples

```javascript
await page.click('id=user-name')

await page.locator('#login-button').click()

await page.locator('xpath=//input[@name="password"]').fill('text')

await page.locator('text=LOGIN').click()
```

---

## 🔐 Sample Tests

### Demo Login Test 1

```javascript
test('Demo Login Test 1', async ({page}) => {
    await page.goto('https://demo.applitools.com/')
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('Sneha')
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('1234')
    await page.getByRole('link', { name: 'Sign in' }).click()
})
```

---

## ✅ Assertions

```javascript
await expect(page).toHaveTitle(/.*Kitchen/)
await expect(page).toHaveURL('https://kitchen.applitools.com/')
await expect(locator).toBeVisible()
await expect(locator).toBeEnabled()
await expect(locator).toHaveText('text')
```

### Soft Assertions

```javascript
await expect.soft(locator).toBeDisabled()
```

---

## 🎬 Slow Motion & Video Recording

### Config

```javascript
use: {
  video: 'on',
  launchOptions: {
    slowMo: 1000
  }
}
```

### Browser Context Setup

```javascript
const browser = await chromium.launch({ slowMo: 500, headless: false })

const context = await browser.newContext({
  recordVideo: {
    dir: 'videos/',
    size: { width: 800, height: 600 }
  }
})
```

---

## 🧩 Hooks & Grouping

### Hooks

* `beforeAll`
* `beforeEach`
* `afterAll`
* `afterEach`

### Groups

```javascript
describe()
```

---

## 🏷️ Annotations

```javascript
test.skip()
test.fail()
test.fixme()
test.slow()
test.only()
```

### Tags

```javascript
test('Test login page @smoke', async ({page}) => {})
```

```bash
npx playwright test --grep "@smoke"
npx playwright test --grep-invert "@smoke"
```

---

## 🧱 Page Object Model (POM)

### Steps

1. Initialize project
2. Install Playwright
3. Create test
4. Run tests
5. Create `pages/` folder
6. Create page classes
7. Add locators & methods
8. Use in test files

---

## 🔌 API Testing

### Setup

```bash
npm init playwright@latest
npx playwright test
```

---

### GET Request

```javascript
const response = await request.get('https://jsonplaceholder.typicode.com/posts')
expect(response.status()).toBe(200)
```

---

### POST Request

```javascript
const response = await request.post(url, {
  data: { title: 'foo', body: 'bar', userId: 1 }
})
expect(response.status()).toBe(201)
```

---

### PUT Request

```javascript
const response = await request.put(url, {
  data: { title: 'foo', body: 'bar', userId: 1 }
})
expect(response.status()).toBe(200)
```

---

### DELETE Request

```javascript
const response = await request.delete(url)
expect(response.status()).toBe(204)
```

---

## 📌 Summary

This document provides a **complete end-to-end Playwright guide**, covering:

* Setup & installation
* Writing & running tests
* Debugging & tracing
* Selectors & assertions
* Test organization
* POM structure
* API testing

---