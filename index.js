function takeANumber(currentLine, name) {
  currentLine.push(name)
  let position = currentLine.length
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(currentLine) {
  if (currentLine.length > 0 ) {
    let firstPerson = currentLine[0]
    currentLine.shift()
    return `Currently serving ${firstPerson}.`
  } else {
    return 'There is nobody waiting to be served!'
  }
}
