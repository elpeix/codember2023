export function challenge03(passKeys) {
  if (typeof passKeys !== 'string') {
    throw new Error('challenge03() expects a string')
  }

  const passKeyArray = passKeys.split('\n')
  const passKeyArrayLength = passKeyArray.length
  let result = []

  for (let i = 0; i < passKeyArrayLength; i++) {
    const passKey = passKeyArray[i].trim()
    if (!passKey || notValidPassKey(passKey)) {
      continue
    }
    result.push({ passkey: passKey, valid: checkPassKey(passKey) })
  }
  return result
}

function notValidPassKey(passKey) {
  return passKey.split(':').length !== 2
}

function checkPassKey(passKey) {
  const [policy, password] = passKey.split(':')
  const [range, letter] = policy.split(' ')
  const [min, max] = range.split('-')
  const letterCount = password.split(letter).length - 1
  return letterCount >= min && letterCount <= max
}