import {test, expect} from '@playwright/test';
import { request } from 'node:http';
import { json } from 'node:stream/consumers';

test('get list of users', async ({request})=>{
    const response= await request.get('https://dummyjson.com/users?limit=5');
    expect(response.status()).toBe(200);
    const body= await response.json();
    console.log(body);
});

test('login via APi', async ({request})=>{
    const response = await request.post('https://dummyjson.com/auth/login', {
        data:{
            username: 'emilys',
            password: 'emilyspass'
        },
    });
    expect(response.status()).toBe(200);
    const body= await response.json();
    console.log(body);

});