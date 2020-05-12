export const required = (value) => {
  if (!value) return 'the field is required'
  return undefined
}
export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) return `max length is ${maxLength} symbols`
  return undefined
}
