function takeANumber(currentLine, name) {
  currentLine.push(name)
  let position = currentLine.length
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(currentLine) {
  let firstPerson = currentLine[0]
  currentLine.unshift()
  return firstPerson
}