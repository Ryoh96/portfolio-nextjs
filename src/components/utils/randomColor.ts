export const getRandomColor = () => {
  const colors = [
    '#ff0000',
    '#ffa500',
    '#ffff00',
    '#008000',
    '#0000ff',
    '#800080',
    '#ffc0cb',
  ]

  const randomIndex = Math.floor(Math.random() * colors.length)

  return colors[randomIndex]
}
