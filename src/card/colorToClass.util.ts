const colorToClass = (colorIdentity: string): string => {
  if (colorIdentity === null) {
    return 'artifact'
  }

  if (!colorIdentity.includes(',')) {
    return letterToWord(colorIdentity)
  } else {
    const colors = colorIdentity.split(',')
    let className = ''
    for (let i = 0; i < colors.length; i++) {
      className = className + letterToWord(colors[i])
      if (i !== colors.length - 1) {
        className = className + '-'
      }
    }

    return className
  }
}

const letterToWord = (colorIdentity: string): string => {
  switch (colorIdentity) {
    case 'W':
      return 'white'
    case 'G':
      return 'green'
    case 'B':
      return 'black'
    case 'R':
      return 'red'
    case 'U':
      return 'blue'
    default:
      return 'unknown'
  }
}

export default colorToClass
