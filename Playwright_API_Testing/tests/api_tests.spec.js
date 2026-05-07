import { test, expect } from '@playwright/test'

test('API GET Request', async ({ request }) => {

    const response = await request.get('https://jsonplaceholder.typicode.com/posts')

    expect(response.status()).toBe(200)

    const text = await response.text();
    expect(text).toContain('qui est esse')

    console.log(await response.json());

})

test('API POST Request', async ({ request }) => {

    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
            'title': 'foo',
            'body': 'bar',
            'userId': 1
        }
    })

    expect(response.status()).toBe(201)

    const text = await response.text();
    expect(text).toContain('foo')

    console.log(await response.json());

})

test('API PUT Request', async ({ request }) => {

    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
        data: {
            'title': 'foo',
            'body': 'bar',
            'userId': 1
        }
    })

    expect(response.status()).toBe(200)

    const text = await response.text();
    expect(text).toContain('foo')

    console.log(await response.json());

})

test('API DELETE Request', async ({ request }) => {

    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1')
    expect(response.status()).toBe(204)
})