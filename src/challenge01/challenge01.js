export function challenge01(data) {
  if (data === undefined || typeof data !== 'string') {
    throw new Error('data must be a string')
  }
  if (data === '') {
    return ''
  }

  const words = data.toLowerCase().split(' ')
  const wordCount = {}
  words.forEach(word => {
    if (wordCount[word]) {
      wordCount[word] += 1
    } else {
      wordCount[word] = 1
    }
  })

  let result = ''
  for (let word in wordCount) {
    result += `${word}${wordCount[word]}`
  }
  return result
}
