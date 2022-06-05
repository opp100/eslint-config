# eslint-config
The Preferred eslint rules for TypeScript.

## Installation
```sh
npm i @opp100/eslint-config
```

## Usage
In `.eslintrc.js`
```javascript
module.exports = {
    extends: ['@opp100/eslint-config/ts-react'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    ignorePatterns: ['vite.*.ts', '**/dist/*', '.eslintrc.js'],
    env: {
        browser: true,
        node: true,
    }
    // ...
};

```