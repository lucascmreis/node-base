import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'

describe('Signup Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accountCollection = MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

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
