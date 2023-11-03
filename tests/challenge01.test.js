import { describe, it, expect } from 'vitest'
import { challenge01 } from '../src/challenge01/challenge01'


describe('challenge01', () => {
  it('should recieve a string', () => {
    expect(() => challenge01()).toThrow()
    expect(() => challenge01(1)).toThrow()
    expect(() => challenge01([])).toThrow()
    expect(() => challenge01({})).toThrow()
    expect(() => challenge01('')).not.toThrow()
  })

  it('should return a string', () => {
    expect(challenge01('')).to.be.a('string')
  })

  it('should return gato2perro3coche1sol1', () => {
    expect(challenge01('gato perro perro coche Gato peRRo sol')).toBe(
      'gato2perro3coche1sol1'
    )
  })

  it('should return llaves2casa3', () => {
    expect(challenge01('llaveS casa CASA casa llaves')).toBe('llaves2casa3')
  })

  it('should return taza2ta1za1', () => {
    expect(challenge01('taza ta za taza')).toBe('taza2ta1za1')
  })

  it('should return casas1casa1casasas1', () => {
    expect(challenge01('casas casa casasas')).toBe('casas1casa1casasas1');
  })
})