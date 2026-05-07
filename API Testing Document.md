# 📘 API Testing with Playwright

## 📑 Table of Contents

1. [Introduction](#introduction)
2. [Project Setup](#project-setup)
3. [Running Initial Tests](#running-initial-tests)
4. [Writing API Tests](#writing-api-tests)

   * [GET Request](#get-request)
   * [POST Request](#post-request)
   * [PUT Request](#put-request)
   * [DELETE Request](#delete-request)
5. [Best Practices](#best-practices)
6. [Conclusion](#conclusion)

---

## 📌 Introduction

Playwright is widely known for UI automation, but it also provides powerful **API testing capabilities** through its built-in `request` context. This allows testers to validate backend services independently or alongside UI tests.

---

## ⚙️ Project Setup

### Step 1: Create Project Folder

```bash
mkdir playwright-api-testing
cd playwright-api-testing
```

### Step 2: Open in VS Code

```bash
code .
```

### Step 3: Initialize Playwright Project

```bash
npm init playwright@latest
```

👉 This installs:

* Playwright test runner
* Browsers (optional)
* Example tests

---

## ▶️ Running Initial Tests

Verify setup using:

```bash
npx playwright test
npx playwright test --ui
npx playwright show-report
```

✔ Ensures Playwright is installed correctly

✔ Validates test execution and reporting

---

## 🧪 Writing API Tests

Create a test file:

```
tests/api_tests.spec.js
```

### Common Import

```javascript
import { test, expect } from '@playwright/test';
```

---

## 🌐 GET Request

### Example

```javascript
test('API GET Request', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts');

    // Validate status
    expect(response.status()).toBe(200);

    // Validate response content
    const text = await response.text();
    expect(text).toContain('qui est esse');

    // Log response
    console.log(await response.json());
});
```

### Key Points

* Uses `request.get()`
* Validates status code and response body
* Useful for fetching data from APIs

---

## 📤 POST Request

### Example

```javascript
test('API POST Request', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
            title: 'foo',
            body: 'bar',
            userId: 1
        }
    });

    expect(response.status()).toBe(201);

    const text = await response.text();
    expect(text).toContain('foo');

    console.log(await response.json());
});
```

### Key Points

* Uses `request.post()`
* Sends payload using `data`
* Commonly used for creating resources

---

## 🔄 PUT Request

### Example

```javascript
test('API PUT Request', async ({ request }) => {
    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
        data: {
            title: 'foo',
            body: 'bar',
            userId: 1
        }
    });

    expect(response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain('foo');

    console.log(await response.json());
});
```

### Key Points

* Updates existing resources
* Requires resource ID in URL
* Typically returns status `200`

---

## ❌ DELETE Request

### Example

```javascript
test('API DELETE Request', async ({ request }) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.status()).toBe(204);
});
```

### Key Points

* Deletes resources
* Usually returns `204 No Content`

---

## ✅ Best Practices

### 1. Use Base URL

Configure in `playwright.config.js`:

```javascript
use: {
    baseURL: 'https://jsonplaceholder.typicode.com'
}
```

Then call:

```javascript
await request.get('/posts');
```

---

### 2. Validate JSON Instead of Text

```javascript
const json = await response.json();
expect(json[0].id).toBe(1);
```

---

### 3. Use Headers When Required

```javascript
await request.post('/endpoint', {
    headers: {
        Authorization: `Bearer TOKEN`
    },
    data: {}
});
```

---

### 4. Reuse Request Context

Playwright automatically provides `request` fixture for efficiency.

---

### 5. Add Negative Tests

```javascript
expect(response.status()).not.toBe(500);
```

---

### 6. Organize Tests

* Group related APIs
* Use descriptive test names
* Separate files by feature/module

---

## 🏁 Conclusion

Playwright’s API testing capabilities provide:

* Fast backend validation
* Seamless integration with UI tests
* Built-in assertions and reporting

It is a powerful tool for **end-to-end testing strategies**, enabling teams to test both frontend and backend in a unified framework.

---