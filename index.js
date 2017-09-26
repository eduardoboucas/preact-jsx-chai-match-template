import {render} from 'preact-render-to-string'
import htmlLooksLike from 'html-looks-like'

export default function assertMatch({Assertion}) {
  if (Assertion.__assertMatch) return

  Assertion.__assertMatch = true

  Assertion.addMethod('matchTemplate', function (templateRaw) {
    const actual = render(this._obj)
    const template = render(templateRaw)
      .replace(/\(\.\.\.\)/g, '{{ ... }}')

    htmlLooksLike(actual, template)
  })
}

if (typeof chai !== 'undefined' && chai.use) chai.use(assertMatch)
