const assert = chai.assert


suite('더하기', () => {
  test('정수', () => {
    assert.equal(5, add(2, 3))
  })

  test('정수와 문자열', () => {
    assert.equal('2y', add(2, 'y'))
  })
})
