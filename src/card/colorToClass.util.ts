import { CardColor } from './card.meta'

const colorToClass = (colorIdentity: string): string => {
  if (colorIdentity === null) {
    return 'artifact';
  }

  if (colorIdentity.includes(',') === false) {
    return letterToWord(colorIdentity)
  } else {
    const colors = colorIdentity.split(',');
    let className = '';
    for (let i = 0; i < colors.length; i++) {
      className = className + letterToWord(colors[i]);
      if (i !== colors.length - 1) {
        className = className + '-';
      }
    }

    return className;
  }
}

const letterToWord = (colorIdentity: keyof typeof CardColor | string): string => {
  const index = Object.keys(CardColor).indexOf(colorIdentity)
  if (index !== -1) {
    return Object.values(CardColor)[index].toLocaleLowerCase()
  }

  return 'unknown'
}

export default colorToClass
