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

function currentLine(currentLine) {
  if (currentLine.length > 0 ) {
    let result = 'The line is currently: '
    for (i == 0; i < (currentLine.length - 1); i++) {
      result = result + `${i} : ${currentLine[i]}, `
      console.log(i)
      console.log(result)
    }
    console.log(i)
    result = result + `${i} : ${currentLine[i]}`
    console.log(result)
  } else {
    return 'The line is currently empty.'
  }
}
