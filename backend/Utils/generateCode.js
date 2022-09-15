exports.genrateCode = (len) => {
  let code = ''
  let allow = '0123456789'
  for (let i = 0; i < len; i++) {
    code += allow.charAt(Math.floor(Math.random() * allow.length))
  }
  return code
}
