export function challenge05(value) {
  if (typeof value !== 'string') {
    throw new Error('challenge05() expects a string')
  }
  const [id, username, email, age, location] = value.split(',')
  if (!id || !username || !email) {
    return false
  }
  if (id.match(/[^a-z0-9]/i) || username.match(/[^a-z0-9]/i)) {
    return false
  }
  if (!email.match(/^[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+$/i)) {
    return false
  }
  if (age && isNaN(parseInt(age))) {
    return false
  }
  if (location && location.match(/[^a-z\s]/i)) {
    return false
  }
  return true
}
