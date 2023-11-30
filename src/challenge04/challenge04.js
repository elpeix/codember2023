export function challenge04(value) {
  if (typeof value !== 'string') {
    throw new Error('challenge04() expects a string')
  }
  const [name, checksum] = value.split('-')
  let calculatedChecksum = new Map()
  for (let i = 0; i < name.length; i++) {
    const char = name[i]
    if (calculatedChecksum.has(char)) {
      calculatedChecksum.set(char, calculatedChecksum.get(char) + 1)
    } else {
      calculatedChecksum.set(char, 1)
    }
  }
  const calculatedChecksumString = Array.from(calculatedChecksum.keys())
    .filter((key) => calculatedChecksum.get(key) === 1)
    .join('')

  return {
    valid: calculatedChecksumString === checksum,
    name,
    checksum,
    calculatedChecksumString,
  }
}
