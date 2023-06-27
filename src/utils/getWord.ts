export function getMinutesWord(min: number) {
  const lastDigit = min % 10;
  const isDec = min > 10 && min < 21;
  if (lastDigit > 1 && lastDigit <= 4 && !isDec) {
    return 'минуты';
  }
  if (lastDigit === 1 && !isDec) {
    return 'минута';
  }
  return 'минут';
}

export function getPomodoroWord(count: number) {
  const lastDigit = count % 10;
  const isDec = count > 10 && count < 21;
  if (lastDigit > 1 && lastDigit <= 4 && !isDec) {
    return 'помидора';
  }
  if (lastDigit === 1 && !isDec) {
    return 'помидор';
  }
  return 'помидоров';
}
