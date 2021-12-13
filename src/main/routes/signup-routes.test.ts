import request from 'supertest'
import app from '../config/app'

describe('Signup Routes', () => {
  test('should return an account on success ', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        email: 'valid_mail@mail.com',
        name: 'valid_name',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
