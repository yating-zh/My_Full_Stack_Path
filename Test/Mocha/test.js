/* eslint-env mocha */
describe('my home page test', function () {
  it('check login', function () {
    console.log('check login passed')
  })
  it('check home page', function () {
    console.log('check home page passed')
  })
  it('navigate to home page', function () {
    console.log('navigate to home page passed')
    throw Error('Test failure')
  })
  describe('Home page to payment page ', function () {
    it('Home page to payment page 1', function () {
      console.log('Home page to payment page 1 passed')
    })
    describe('Home page to payment page ', function () {
      it('Home page to payment page 2', function () {
        console.log('Home page to payment page 2 passed')
      })
    })
    describe('Home page to payment page ', function () {
      it('Home page to payment page 3', function () {
        console.log('Home page to payment page 3 passed')
      })
    })
  })
})

// npm run test
