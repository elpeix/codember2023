export function challenge02(message) {
  if (typeof message !== 'string') {
    throw new Error('challenge02() expects a string')
  }
  let result = ''
  let carry = 0
  for (let i = 0; i < message.length; i++) {
    const char = message[i]
    if (char === '#') {
      carry++
    } else if (char === '@') {
      carry--
    } else if (char === '*') {
      carry = carry * carry
    } else if (char === '&') {
      result += carry + ''
    } 
  }
  return result
}