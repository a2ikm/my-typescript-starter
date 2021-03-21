import { hello } from '../index'

describe('hello', () => {
  it('returns "Hello world!" by default', () => {
    expect(hello()).toEqual('Hello world!')
  })
  it('returns "Hello Mars!" if given "Mars"', () => {
    expect(hello('Mars')).toEqual('Hello Mars!')
  })
})
