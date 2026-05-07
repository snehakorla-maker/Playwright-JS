import {test} from '@playwright/test'

// Annotations

test.skip('Test One', async({page}) => {
// This test will be skipped
})

test('not ready yet', async({page}) => {
    // will mark test as failure, will show error if the test does not fail
    // page.goto('https://www.saucedemo.com/')
    test.fail();
})

test.fixme('test to be fixed', async({page}) => {
    //test will be aborted
})

test('slow test', async({page}) => {
    // marks the test as slow and triples the test timeout
    test.slow();
})

// test.only('focus this test', async({page}) => {
//     // run only focused tests in the entire project
//     test.slow();
// })

// Tags

test('Test login page @smoke', async({page}) => {

})