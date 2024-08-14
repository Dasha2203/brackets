module.exports = function check(str, bracketsConfig) {
  const mapClosedBrackets = Object.fromEntries(bracketsConfig.map(arr => [...arr].reverse()))
  const brackets = Object.values(mapClosedBrackets)
  const stack = []

  for (let i = 0; i < str.length; i++) {
      
    if (brackets.includes(str[i]) && mapClosedBrackets[str[i]] === str[i] && !stack.includes(str[i])) {
      stack.push(str[i])

      continue
    }

    if (brackets.includes(str[i]) && mapClosedBrackets[str[i]] !== str[i] ) {
      stack.push(str[i])

      continue
    }

    if (stack.at(-1) !== mapClosedBrackets[str[i]]){

      return false
    }

    stack.pop()
  }
  
  return !stack.length
}
