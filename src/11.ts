import { getRandomInt } from 'random';

export function getRandomColor() {
  const colors = ['red', 'green', 'blue'];
  return colors[getRandomInt(0, colors.length)];
}