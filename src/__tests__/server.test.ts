import request from "supertest";
import server, { connectDB } from "../server";
import db from "../config/db";

describe('GET /api', () => {
    it('should send back a json response', async () => {
        const res = await request(server).get('/api')

        expect(res.status).toBe(200)
        expect(res.headers['content-type']).toMatch(/json/)
        expect(res.body.msg).toBe('from API')

        expect(res.status).not.toBe(404)
        expect(res.body.msg).not.toBe('FROM API')
    })
})

jest.mock('../config/db')

describe('connectDB', () => {
    it('should handle database connection error', async () => {
        jest.spyOn(db, 'authenticate')
            .mockRejectedValueOnce(new Error('DB Connection Failed'))
        const consoleSpy = jest.spyOn(console, 'log')
        await connectDB()

        expect(consoleSpy).toHaveBeenCalledWith(
            expect.stringContaining('DB Connection Failed')
        )
    })
})