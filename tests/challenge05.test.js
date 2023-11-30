import { describe, it, expect } from 'vitest'
import { challenge05 } from '../src/challenge05/challenge05'

describe('challenge05', () => {
  it('should recieve a string', () => {
    expect(() => challenge05()).toThrow()
    expect(() => challenge05(1)).toThrow()
    expect(() => challenge05([])).toThrow()
    expect(() => challenge05({})).toThrow()
    expect(() => challenge05('')).not.toThrow()
  })

  it('should return true', () => {
    expect(challenge05('1a421fa,alex,alex9@gmail.com,18,Barcelona')).toBe(true)
  })

  it('should return false', () => {
    expect(challenge05('9412p_m,maria,mb@hotmail.com,22,CDMX')).toBe(false)
  })

  it('should return true', () => {
    expect(challenge05('494ee0,madeval,mdv@twitch.tv,,')).toBe(true)
  })

  it('should return false', () => {
    expect(challenge05('494ee0,madeval,twitch.tv,22,Montevideo')).toBe(false)
  })

  it('should return false', () => {
    expect(challenge05(',oHrWHE,oHrWHE@a.com,a,')).toBe(false)
  })

  it('should return false', () => {
    expect(challenge05('UXMmi9,htuPMN,@@@.com,,Berlin')).toBe(false)
  })

  it('should return true', () => {
    expect(
      challenge05('f9Fw1q6tWq,djrWrL,djrwrl@outlook.com,20,New York')
    ).toBe(true)
  })
})
