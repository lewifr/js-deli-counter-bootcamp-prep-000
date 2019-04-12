function takeANumber(currentLine, name) {
  currentLine.push(name)
  let position = currentLine.length
  return `Welcome, ${name}. You are number ${position} in line.`
}
