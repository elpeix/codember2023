import { describe, it, expect } from 'vitest'
import { challenge03 } from '../src/challenge03/challenge03'

describe('challenge03', () => {

  it('should recieve a string', () => {
    expect(() => challenge03()).toThrow()
    expect(() => challenge03(1)).toThrow()
    expect(() => challenge03([])).toThrow()
    expect(() => challenge03({})).toThrow()
    expect(() => challenge03('')).not.toThrow()
  })

  it('should return an array', () => {
    expect(Array.isArray(challenge03(''))).toBe(true)
  })

  it('should return empty array with invalid line value', () => {
    expect(challenge03('invalid line value')).toEqual([])
  })

  it('should return array with one item and this item is an object', () => {
    const result = challenge03('1-3 a: abcde')
    console.log(result)
    expect(result.length).toBe(1)
    const item = result[0]
    expect(typeof item).toBe('object')
    expect(item).not.toBeNull()
    expect(item).not.toBeUndefined()
    expect(item).hasOwnProperty('passkey')
    expect(item).hasOwnProperty('valid')
    expect(item.passkey).toBe('1-3 a: abcde')
    expect(typeof item.valid).toBe('boolean')
  })

  it('should return array with two valid paswords', () => {
    const result = challenge03('2-4 f: fgff\n4-5 z: zzzsg\n1-6 h: hhhhhh')
    expect(result.length).toBe(3)
    expect(result[0].valid).toBe(true)
    expect(result[1].valid).toBe(false)
    expect(result[2].valid).toBe(true)
  })

})