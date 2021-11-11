import { SignUpController } from './signup'
import { MissingParamError } from '../erros/missing-param-error'

describe('SignUp Controller', () => {
  it('Should return 400 if no name is provided ', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        // name: 'any name',

        email: 'any_email@mail.com',
        password: 'any',
        passwordConfirmation: 'any'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })

  it('Should return 400 if no email is provided ', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any name',
        // email: 'any_email@mail.com',
        password: 'any',
        passwordConfirmation: 'any'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  it('Should return 400 if no password is provided ', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any name',
        email: 'any_email@mail.com',
        // password: 'any',
        passwordConfirmation: 'any'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })

  it('Should return 400 if no password is provided ', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any name',
        email: 'any_email@mail.com',
        password: 'any',
        // passwordConfirmation: 'any'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('passwordConfirmation'))
  })
})
