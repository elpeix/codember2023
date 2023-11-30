import { describe, it, expect } from 'vitest'
import { challenge04 } from '../src/challenge04/challenge04'

describe('challenge04', () => {
  it('should recieve a string', () => {
    expect(() => challenge04()).toThrow()
    expect(() => challenge04(1)).toThrow()
    expect(() => challenge04([])).toThrow()
    expect(() => challenge04({})).toThrow()
    expect(() => challenge04('')).not.toThrow()
  })

  it('It should return a true result xyzz33-xy', () => {
    expect(challenge04('xyzz33-xy').valid).toBe(true)
  })

  it('It should return a false result abcca1-ab1', () => {
    expect(challenge04('abcca1-ab1').valid).toBe(false)
  })

  it('It should return a false result abbc11-ca', () => {
    expect(challenge04('abbc11-ca').valid).toBe(false)
  })
})
