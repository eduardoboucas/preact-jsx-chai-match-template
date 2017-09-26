# preact-jsx-chai-match-template

A method that adds assertions with [html-looks-like](https://github.com/staltz/html-looks-like) to Chai for testing Preact components.

## Installation

1. Download the module

   ```
   npm install preact-jsx-chai-match --save-dev
   ```

1. Add it to Chai

   ```jsx
   import chai from 'chai'
   import assertMatch from 'preact-jsx-chai-match'

   chai.use(assertMatch)
   ```

## Usage

```jsx
const component = (
  <div class="container">
    <button type="button">Previous</button>

    <div class="article">
      <h1>Hello world</h1>
      <p>This is a test</p>
    </div>

    <button type="button">Next</button>
  </div>
)

const template = (
  <div class="container">
    (...)

    <div class="article">
      <h1>Hello world</h1>
      (...)
    </div>

    (...)
  </div>
)

expect(component).to.matchTemplate(template)
```
