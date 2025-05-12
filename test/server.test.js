const request = require('supertest');
const express = require('express');
const app = require('../server');

describe('GET /', () => {
    it('responds with Hello, World!', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Hello, World!');
    });
});
