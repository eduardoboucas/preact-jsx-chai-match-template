import {render} from 'preact-render-to-string'
import htmlLooksLike from 'html-looks-like'

export default function assertMatch({Assertion}) {
  if (Assertion.__assertMatch) return

  Assertion.__assertMatch = true

  Assertion.addMethod('match', function (expectedRaw) {
    const actual = render(this._obj)
    const expected = render(expectedRaw)
      .replace(/\[\*\]/g, '{{ ... }}')

    htmlLooksLike(actual, expected)
  })
}

if (typeof chai !== 'undefined' && chai.use) chai.use(assertMatch)
