# preact-jsx-chai-match-template

Use [html-looks-like](https://github.com/staltz/html-looks-like) to assert Preact components in JSX.

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

*Before*

```jsx
import {render as renderToString} from 'preact-render-to-string'
import htmlLooksLike from 'html-looks-like'

const actual = renderToString(
  <Component1
    config={mockConfig}
    schema={mockSchema}
  />
)

const expected = renderToString(
  <Component2
    label={mockSchema.label}
  >
    {'{{ ... }}'}
  </Component2>
)

htmlLooksLike(component, label)
```

*After*

```jsx
const actual = (
  <Component1
    config={mockConfig}
    schema={mockSchema}
  />
)

const template = (
  <Component2
    label={mockSchema.label}
  >(...)</Component2>
)

expect(actual).to.matchTemplate(template)
```
