// !!! In it() block,  use this.test or this.currentTest
// !!! In beforeEach and afterEach hook,  use this.currentTest
/* eslint-env mocha */
describe('My Test Suite', async function () {
  it('Test Home Page Navigation', async function () {
    console.log('>>it()>>this.test.title:', this.test.title) // case title
    console.log('>>it()>>this.test.file:', this.test.file) // file address
    console.log('>>it()>>this.test.parent.title:', this.test.parent.title) // suite title
    console.log('>>it()>>this.test.fullTitle():', this.test.fullTitle()) // suite title + case title
  })

  it('The Second Example Test', async function () {
    console.log('The Second Example Test')
  })
  it('The Third Example Test', async function () {
    console.log('The Third Example Test')
    throw new Error('error:invalid value')
  })

  // 1. beforeEach hook: runs before each it()
  beforeEach(async function () {
    console.log(
      '** >>beforeEach()>>this.currentTest.title:',
      this.currentTest.title
    )
    // console.log(
    //  "** >>beforeEach()>>this.currentTest.file:",
    //  this.currentTest.file
    // );
    // console.log(
    //  "** >>beforeEach()>>this.currentTest.parent.title:",
    //  this.currentTest.parent.title
    // );
    // console.log(
    //  "** >>beforeEach()>>this.currentTest.fullTitle():",
    //  this.currentTest.fullTitle()
    // );
  })

  // 2. afterEach hook: runs after each it()
  afterEach(async function () {
    console.log(
      '** >>afterEach()>>this.currentTest.title:',
      this.currentTest.title
    )
    console.log(
      '** >>beforeEach()>>this.currentTest.state:',
      this.currentTest.state // passed / failed
    )
    if (this.currentTest.state === 'failed') {
      // ...perform actions
    } else if (this.currentTest.state === 'passed') {
      // ...perform actions
    }
    // console.log(
    //  "** >>afterEach()>>this.currentTest.file:",
    //  this.currentTest.file
    // );
    // console.log(
    //  "** >>afterEach()>>this.currentTest.parent.title:",
    //  this.currentTest.parent.title
    // );
    // console.log(
    //  "** >>afterEach()>>this.currentTest.fullTitle():",
    //  this.currentTest.fullTitle()
    // );
  })
})
