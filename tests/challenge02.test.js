import { describe, it, expect } from 'vitest'
import { challenge02 } from '../src/challenge02/challenge02'

describe('challenge02', () => {
  it('should recieve a string', () => {
    expect(() => challenge02()).toThrow()
    expect(() => challenge02(1)).toThrow()
    expect(() => challenge02([])).toThrow()
    expect(() => challenge02({})).toThrow()
    expect(() => challenge02('')).not.toThrow()
  })

  it('should return a string', () => {
    expect(challenge02('')).to.be.a('string')
  })

  it('should return "0" with "&"', () => {
    expect(challenge02('&')).toBe('0')
  })

  it('should return "00" with "&&', () => {
    expect(challenge02('&')).toBe('0')
  })

  it('should return "4" with "##*&"', () => {
    expect(challenge02('##*&')).toBe('4')
  })

  it('should return "0243" with "&##&*&@&"', () => {
    expect(challenge02('&##&*&@&')).toBe('0243')
  })
})