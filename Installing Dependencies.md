# Installing Project Dependencies

This project does not include the `node_modules` folder because it is ignored by Git.

After cloning the repository to your local system, follow these steps to install all required dependencies.

> **Note:**  
> The example below demonstrates the process for a single sub-folder (`MiniProject_Demo`).  
> If your repository contains multiple project sub-folders with their own `package.json` files, these steps must be repeated for each sub-folder.

## 1. Open Terminal

Navigate to the project folder:

```bash
cd MiniProject_Demo
```

## 2. Install Dependencies

Run the following command:

```bash
npm install
```

OR (recommended for exact versions from `package-lock.json`):

```bash
npm ci
```

## What These Commands Do

- `npm install`
  - Installs dependencies from `package.json`
  - Updates `package-lock.json` if needed

- `npm ci`
  - Installs dependencies exactly as defined in `package-lock.json`
  - Faster and more reliable for consistent environments
  - Recommended for CI/CD and shared projects

## After Installation

The `node_modules` folder will be recreated automatically.

You can then run the project normally.