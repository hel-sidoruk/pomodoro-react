export function getDaysArray() {
  const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const currentDay = new Date().getDay();
  const next = [...days.slice(currentDay + 1)];
  const previous = [...days.slice(0, currentDay)];

  return [...next, ...previous, days[currentDay]];
}
